import React, { Component } from 'react';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const styles={
      bar:{
          marginTop:50,
          marginBottom:100,
          padding:20
      },
  };

class Report extends Component {
 
 constructor() {
          super();
          this.state = {
            tests:["HTMLHINT","MOCHA","ISTANBUL","ESLINT"],
            reportData:''
          };
      }

      componentWillMount()
      {

        var getReport=JSON.parse(window.localStorage.getItem("reportData"));
        this.setState({
          reportData:getReport
        });
        
        Request
       .get('http://localhost:9080/api/:owner/:repoName/:repoBranch/:starttime/evalFindings')
       .end((err,res)=>
       {
        console.log(res);
         })
       }
       
  render(){
  	 var reportRows=[];
  	 reportRows.push(this.state.tests.map((obj)=>
	  	 {
	  	 	
          return(
            <Row>
            <Col xs={12}>
            <Card >
              <CardHeader
              title={obj}
		      actAsExpander={true}
		      showExpandableButton={true}
		      style={{fontSize:25}}>
              </CardHeader>
              <CardText expandable={true}>
              </CardText>
            </Card>
            </Col>
            </Row>
            );
	  	 })
  	 );
  	return(
  		<Grid>
              <Paper style={styles.bar}>
                        <div>

                          <Table>
                         <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={{fontSize:35,textAlign:'center'}}><b>REPORT</b>
                  </TableRow>
                </TableHeader>
          <TableBody  displayRowCheckbox={false}>
                         {reportRows}
                         </TableBody>
                        </Table>
                        </div>
     </Paper>
              </Grid>
    );
  	
  };
 }


export default Report;