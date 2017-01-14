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
    };
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  componentDidMount() {
     Request
        .get('http://localhost:9080/api/jarvis/projects')
        .then((res) => {
         this.setState({
            repositories: res.body
          });
        });

  }
  
  handleRepoData=(event)=>{
      window.localStorage.setItem("repoData",event.target.className);
   }
   
  render() {
    {this.componentDidMount()}
    const repoList=this.state.repositories.map((repo)=>{
      return(
        <TableRow style={{fontSize:18}}>
          <Link to="/ownerName/repoName/branch" className={JSON.stringify(repo)} onTouchTap={this.handleRepoData.bind(this)}>{repo.reponame}</Link>
          <Link to="/ownerName/repoName/pipelineSettings">
             <IconButton style={{marginLeft:'90%'}}><Setting color={'#00897B'} size={80}/></IconButton>
          </Link>
        </TableRow>
        );
    });
   return (
    <Grid>
    <Row center="xs">
     <Col xs={12}>
        <Paper style={{padding:'20',marginTop:'50',textAlign:'center'}}>
		     <Table >
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	         <TableRow>
	          <TableHeaderColumn style={{fontSize:25}}><b>Projects</b></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
	         </TableRow>
          </TableHeader>
    		  <TableBody  displayRowCheckbox={false}>
          <TableRow>
          {repoList}
          </TableRow>
	 	     </TableBody>
  		  </Table>
   	   </Paper>
       <Row end='xs'  style={{marginBottom:100}}>
                <IndexLink to="/ownerName/createRepo" activeClassName="active">
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
