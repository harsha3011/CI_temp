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

        this.setState({
          reportButton: 'block'
        })

        console.log(this.state.configFiles.stages[1].config);
        var data={"htmlhint":this.state.configFiles.stages[1].config}
        Request
        .post('http://localhost:9080/api/jarvis/myrepo/dev/executions')
        .set('Content-Type', 'application/json')
        .send(data)
        .end(function(err,resp)
        {
              if (err) console.log(err);
              console.log(resp);
          })
        }


       componentWillMount()
       {

         var getFiles=JSON.parse(window.localStorage.getItem("repoData"));
         this.setState({
           configFiles:getFiles
         });
         console.log(getFiles.repo_Ref);
         
       }
       render(){
         var rows=[];
         rows.push(this.state.configFiles.repo_Ref.map((obj)=>
         {
           return(<TableRow >
                    <TableRowColumn style={{textAlign:'center'}}>{obj}</TableRowColumn>

                      <TableRowColumn style={{textAlign:'center'}}>
                      <RaisedButton onClick={this.handleExecute} label="Execute"/>
                      </TableRowColumn>

                      <TableRowColumn style={{textAlign:'center'}}>
                      <RaisedButton className="report" label="Report" style={{display:this.state.reportButton}}/>
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
