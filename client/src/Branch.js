import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid, Row, Col} from'react-flexbox-grid';
import {Link} from 'react-router';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';

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
           this.state = {
             value: 'a',
             expanded: false,
             configFiles:[]
           };
       }
       componentWillMount()
       {
         var configFiles={
            repository:"myrepo",
            branch:["master","dev","integration"]};
         window.localStorage.setItem("files",JSON.stringify(configFiles));
         var getFiles=JSON.parse(window.localStorage.getItem("files"));
         this.setState({
           configFiles:getFiles
         })
       }
       render(){
         var rows=[];
         rows.push(this.state.configFiles.branch.map((obj)=>
         {
           return(<TableRow >
                    <TableRowColumn style={{textAlign:'center'}}>{obj}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}><RaisedButton label="Execute"/></TableRowColumn>
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
