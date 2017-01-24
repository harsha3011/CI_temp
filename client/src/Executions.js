import React, { Component } from 'react';
import Request from 'superagent';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

const styles={
      bar:{
          marginTop:50,
          marginBottom:100,
          padding:20
      },
  };

class Executions extends Component {
 constructor(props) {
          super(props);

          this.state = {
             expanded: false,
            consoleOutput:[]
          };
      }
      handleExpand = () => {
    this.setState({expanded: true});
  };

 componentWillMount()
      {

        var getFiles1=localStorage.getItem("repoName");
         const reponame=JSON.parse(JSON.stringify(getFiles1));
          var getFiles2=localStorage.getItem("repoBranch");
         const repobranch=JSON.parse(JSON.stringify(getFiles2));
          var getFiles3=localStorage.getItem("owner");
         const ownername=JSON.parse(JSON.stringify(getFiles3));

        this.setState({
          owner:ownername,
          repoName:reponame,
          repoBranch:repobranch
         });
      }



 showConsole=(event)=>{
        const owner=this.state.owner;
        const repoName=this.state.repoName;
        const repoBranch=this.state.repoBranch;
        const url='http://localhost:9080/api/'+owner+'/'+repoName+'/'+repoBranch+'/executions';

        Request
       .get(url)
       .end((err,resp)=>
       {
         console.log(resp.body);
         this.setState({
            consoleOutput:resp.body
         });

      });
 }


 handleReport=(event)=>{
      window.localStorage.setItem("reportData",event.target.className);
  }
render() {

    var consoleRows=[];
    var list="The build is running.....";
    var progress=""
    var executiontime=""
    var buildReport=""
        consoleRows.push(this.state.consoleOutput.map((obj)=>
        {
          var date=new Date((obj.starttime)).toString();
          var endtime=new Date((obj.endtime)).toString();
          var parsedDateA = new Date(date).getTime();
          var parsedDateB = new Date(endtime).getTime();
          var msec = parsedDateB-parsedDateA;
          var hh = Math.floor(msec / 1000 / 60 / 60);
          msec -= hh * 1000 * 60 * 60;
          var mm = Math.floor(msec / 1000 / 60);
          msec -= mm * 1000 * 60;
          var ss = Math.floor(msec / 1000);
          msec -= ss * 1000;
          var totaltime=" "+mm+" minutes "+ss+" seconds"
          var output=[];
          if(obj.state=="Passed")
          {
            output=obj.stdout;
            output=output.split(/[\n,]+/);

            progress=" "
            executiontime=<div><h3>Execution Time : </h3>
            <p style={{marginTop:21,marginLeft:10}}>{totaltime}</p>
            </div>
            buildReport=<div>
            <RaisedButton primary='true' style={{marginLeft:50,marginTop:20}} label="Show Console" onTouchTap={this.handleExpand} />
            <RaisedButton primary='true' style={{marginTop:30,marginLeft:70,width:170}}><Link to="ownerName/repoName/branch/branchName" style={{textDecoration:'none',color:'white'}} onTouchTap={this.handleReport.bind(this)} className={JSON.stringify(obj)}>BUILD REPORT</Link></RaisedButton>
            </div>
            list=output.map(function(data)
            {
              return  (<li>{data}</li>);
            })
          }
          else if(obj.state=="Running")
          {
            progress=<CircularProgress/>
          }
          else
          {
            output=obj.stderr;
            output=output.split(',');
            progress=" "
             executiontime=<div><h3>Execution Time : </h3>
            <p style={{marginTop:21,marginLeft:10}}>{totaltime}</p>
            </div>
            buildReport=<div>
            <RaisedButton primary='true' style={{marginLeft:50,marginTop:20}} label="Show Console" onTouchTap={this.handleExpand} />
            <RaisedButton primary='true' style={{marginTop:30,marginLeft:70,width:170}}><Link to="ownerName/repoName/branch/branchName" style={{textDecoration:'none',color:'white'}} onTouchTap={this.handleReport.bind(this)} className={obj}>BUILD REPORT</Link></RaisedButton>
            </div>
            list=output.map(function(data)
            {
              return  (<li>{data}</li>);
            })
          }

          return(
            <Row>
            <Col xs={12}>
            <Card >
              <CardHeader style={{fontSize:16}}
              actAsExpander={this.state.expanded}
              ><Row>
                <Col>
                <h3>Build Date : </h3><h3>Status : </h3>
                </Col>
                <Col>
                <p style={{marginTop:21,marginLeft:10}}>{date}</p><p style={{marginLeft:10,marginTop:21}}>{obj.state}</p>

               </Col>
               <Col style={{marginLeft:20,marginTop:21}}>
              {progress}
              </Col>
               <Col>
               {buildReport}
              </Col>

             </Row>
             <Row>{executiontime}</Row>

              </CardHeader>
              <CardText expandable={true} style={{background:'black'}}>
                      <Row>
                        <Col>
                          <ul style={{listStyle:'none', color:'white',fontSize:16}}>{list}</ul>
                        </Col>
                      </Row>
              </CardText>
            </Card>
            </Col>
            </Row>
            );
        }));

  return(
    <Grid>
              <Paper style={styles.bar}>
                        <div>

                          <Table>
                         <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={{fontSize:35,textAlign:'center'}}><b>BUILDS</b>
                  </TableRow>
                </TableHeader>
          <TableBody  displayRowCheckbox={false}>
                          {consoleRows}
                         </TableBody>
                        </Table>
                        </div>
     </Paper>
              </Grid>
    );

 }
}

export default Executions;
