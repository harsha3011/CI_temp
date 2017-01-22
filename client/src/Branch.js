import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid, Row, Col} from'react-flexbox-grid';
import {Link} from 'react-router';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import Request from 'superagent';
const styles={
      bar:{
          marginTop:50,
          marginBottom:100,
          padding:20
      },
  };
const style = {
  marginLeft: -100,
};


  class Branch extends Component{
      constructor(props) {
          super(props);
          this.handleExecute=this.handleExecute.bind(this);
          this.state = {
            value: 'a',
            expanded: false,
            reportButton: 'none',
            configFiles:[]
          };
      }
static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        };
      }

      handleExecute(event){

       localStorage.setItem("repoBranch",event.target.className);
       localStorage.setItem("repoName",this.state.configFiles.reponame);
       localStorage.setItem("owner",this.state.configFiles.owner);
                                
       var data={"owner":this.state.configFiles.owner,
                 "repobranch":event.target.className,
                 "reponame":this.state.configFiles.reponame,
                 "repo_URL":this.state.configFiles.repo_URL,
                 "eslint":this.state.configFiles.stages[0].config,
                 "htmlhint":this.state.configFiles.stages[1].config,
                 "mocha":this.state.configFiles.stages[2].config,
                 "istanbul":this.state.configFiles.stages[3].config
         }
       const owner=this.state.configFiles.owner;
       const repoName=this.state.configFiles.reponame;
       const repoBranch=event.target.className;
      
      Request
       .post('http://172.23.238.173:9080/api/'+owner+'/'+repoName+'/'+repoBranch+'/executions').set('Content-Type', 'application/json')
       .send(data)
       .end((err,res)=>
       {
        this.context.router.push('/ownerName/executions');

        console.log(res);
         })
       }


      componentWillMount()
      {

        var getFiles=JSON.parse(window.localStorage.getItem("repoconfigData"));
        this.setState({
          configFiles:getFiles
        });
       
      }
      render(){
       
        var rows=[];

        rows.push(this.state.configFiles.repo_Ref.map((obj)=>
        {
          return(<TableRow >
                   <TableRowColumn style={{textAlign:'center',fontSize:25}}>{obj}
                   </TableRowColumn>

                  <TableRowColumn style={{textAlign:'center',fontSize:20}}>
                     <RaisedButton primary='true' onClick={this.handleExecute.bind(this)}><Link to="/ownerName/executions" style={{textDecoration:'none'}} className={obj} >Execute
                     </Link></RaisedButton>       
               
                     <RaisedButton style={{marginLeft:20}} primary='true'><Link to="/ownerName/executions" style={{textDecoration:'none'}} className={obj} >View Build Report
                     </Link></RaisedButton>       
               </TableRowColumn>
                 </TableRow>);
        }));
          return(
              <Grid>
              <Paper style={styles.bar}>
                        <div>

                          <Table>
                         <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={{fontSize:35,textAlign:'center'}}><b>BRANCH</b>
                  </TableRow>
                </TableHeader>
          <TableBody  displayRowCheckbox={false}>
                          {rows}
                         </TableBody>
                        </Table>
                        </div>
     </Paper>
              </Grid>


              );
          }
}

export default Branch;