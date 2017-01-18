import React, { Component } from 'react';
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
          marginTop:120,
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

      handleExecute(event){
       localStorage.setItem("repoBranch",event.target.className);
       localStorage.setItem("repoName",this.state.configFiles.reponame);
       localStorage.setItem("owner",this.state.configFiles.owner);
                                
       var data={"repobranch":event.target.className,
                 "reponame":this.state.configFiles.reponame,
                 "repo_URL":this.state.configFiles.repo_URL,
                 "eslint":this.state.configFiles.stages[0].config,
                 "htmlhint":this.state.configFiles.stages[1].config,
                 "mocha":this.state.configFiles.stages[2].config,
                 "istanbul":this.state.configFiles.stages[3].config
         }
       Request
       .post('http://localhost:9080/api/jarvis/VisualBI-2/master/executions')
       .set('Content-Type', 'application/json')
       .send(data)
       .end((err,res)=>
       {
        console.log(res);
         })
       }


      componentWillMount()
      {

        var getFiles=JSON.parse(window.localStorage.getItem("repoData"));
        this.setState({
          configFiles:getFiles
        });
       
      }
      render(){
        var rows=[];

        rows.push(this.state.configFiles.repo_Ref.map((obj)=>
        {
          return(<TableRow >
                   <TableRowColumn style={{textAlign:'center'}}>{obj}</TableRowColumn>

                     <TableRowColumn style={{textAlign:'center'}}>
                     <RaisedButton><Link to="/ownerName/executions" className={obj} onTouchTap={this.handleExecute}>execute
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
                           <TableRow>
                            <TableHeaderColumn style={{fontSize:25, textAlign:'center'}}><b>Branch</b></TableHeaderColumn>
                             <TableHeaderColumn>
                             </TableHeaderColumn>
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