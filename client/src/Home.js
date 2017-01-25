import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AlarmOff from 'react-icons/lib/md/alarm-off';
import AlarmOn from 'react-icons/lib/md/alarm-on';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {IndexLink, Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid ,Row, Col} from 'react-flexbox-grid'
import './App.css'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Setting from 'material-ui/svg-icons/action/settings';
import IconButton from 'material-ui/IconButton';
import Request from 'superagent';

class Home extends Component {
 constructor(props) {
   super(props);
   this.state = {
     value: 'Configure',
     repositories:[],
     configrepositories:[]
   };
 }
 handleChange = (value) => {
   this.setState({
     value: value,
   });
 };
handleConfigRepoData=(event)=>{
     window.localStorage.setItem("repoconfigData",event.target.className);
  }

componentDidMount() {
    let ownerName=this.props.params.ownerName;
    Request
       .get('http://localhost:9080/api/'+ownerName+'/projects')
       .then((res) => {
        this.setState({
           configrepositories: res.body
         });
        console.log("frst");

       });
         Request
       .get("https://api.github.com/users/"+ownerName+"/repos")
       .then((res) => {
        this.setState({
           repositories: res.body,
         });

       console.log("next");
       });  
 }


  handleRepoData=(event)=>{
      window.localStorage.setItem("repoData",event.target.className);
  }

 render() {  

  let config_repos=[];
  const configuredRepoList=this.state.configrepositories.map((repo)=>{
    let url='/app/'+this.props.params.ownerName+'/'+repo.reponame+'/branch' ; 
    config_repos.push(repo.reponame);  
     return(

       <TableRow>
       <TableRowColumn>
         <Link style={{fontSize:18}} to={url} className={JSON.stringify(repo)} onTouchTap={this.handleConfigRepoData.bind(this)}>{repo.reponame}</Link>
            </TableRowColumn>
            <TableRowColumn>
            <IconButton ><Link to="/app/ownerName/repoName/pipelineSettings">
            <Setting color={'#00897B '} size={200}/></Link>
            </IconButton>
          </TableRowColumn>
       </TableRow>
       );
   });
   const repoList=this.state.repositories.map((repo)=>{
    let url="/app/"+this.props.params.ownerName+"/"+repo.name+"/teamtype";

      if (config_repos.indexOf(repo.name)==-1) {
         return(
       <TableRow style={{fontSize:18}}>
            <TableRowColumn><Link to={url} className={JSON.stringify(repo)} onTouchTap={this.handleRepoData.bind(this)}>{repo.name}</Link>
            </TableRowColumn>
       </TableRow>
       );
       }else{
     return;
      }
    
   });
     let route="/app/"+this.props.params.ownerName+"/createRepo";
  return (
   <Grid>
   <Row center="xs">
    <Col xs={12}>
       <Paper style={{margin:40}} >
            <Table >
               <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow style={{fontSize:35}}><b>PROJECTS</b>
            </TableRow>
         </TableHeader>
             <TableBody  displayRowCheckbox={false}>
         <TableRow>
         <Tabs
       value={this.state.value}
       onChange={this.handleChange}
     >
       <Tab label="Configure" value="Configure" >
         <div>
           {configuredRepoList}
         </div>
       </Tab>
       <Tab label="Non-Configured" value="b">
         <div>
           {repoList}
         </div>
       </Tab>
     </Tabs>
         </TableRow>
             </TableBody>
           </Table>
         </Paper>
      <Row end='xs'  style={{marginBottom:100}}>

               <IndexLink to={route} activeClassName="active">
               <Col xs={1}>
                <FloatingActionButton style={{position:'fixed',bottom:100,right:50,}}zDepth={1}>
                 <ContentAdd />
                </FloatingActionButton>
                </Col>
               </IndexLink>
          </Row>
  </Col>
  </Row>

</Grid>)
}
}

export default Home;
