import React, { Component } from 'react';
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Request from 'superagent';
import Checkcircle from 'material-ui/svg-icons/action/check-circle';
import Cancel from 'material-ui/svg-icons/navigation/cancel';

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
            reportData:'',
            testData:''
          };
      }

      componentDidMount()
      {

        var getReport=JSON.parse(window.localStorage.getItem("reportData"));
        this.setState({
          reportData:getReport
        });
        var owner=getReport.owner;
        var repoName=getReport.repoName;
        var repoBranch=getReport.repoBranch;
        var starttime=new Date((getReport.starttime)).toString();
        Request
       .get('http://localhost:9080/api/'+owner+'/'+repoName+'/'+repoBranch+'/'+starttime+'/evalFindings')
       .end((err,res)=>
       {
        this.setState({
        	testData:res.body
        })
         })
       }


  render(){
  		 	var testData='';
        var htmlhintConfig=this.state.testData.htmlhintConfig;
         	var mochaConfig=this.state.testData.mochaConfig;
  var istanbulFile=this.state.testData.istanbulConfig;
  var eslintConfig=this.state.eslintConfig;
      var statements=0;
      var coverStat=0;
      var branches=0;
      var b=0;
      var coverBranch=0;
      var functions=0;
      var coverFn=0;
      var lines=0;

      Object.keys(istanbulFile).forEach((value)=>
      {
        var stat=Object.keys(istanbulFile[value].s).length;
        statements+=stat;
        (Object.keys(istanbulFile[value].s)).forEach(function(outcome){
          if(istanbulFile[value].s[outcome]==1)
          {
            coverStat++;
          }
        })
        var fn=Object.keys(istanbulFile[value].f).length;
        functions+=fn;
        (Object.keys(istanbulFile[value].f)).forEach(function(outcomefn){
          if(istanbulFile[value].f[outcomefn]==1)
          {
            coverFn++;
          }
        })
        Object.keys(istanbulFile[value].b).forEach(function(outcomebr){
          b=istanbulFile[value].b[outcomebr].length;
          branches+=b;
        })
        Object.keys(istanbulFile[value].b).forEach(function(outcomebr){
          istanbulFile[value].b[outcomebr].forEach(function(outcomebranch){
            if(outcomebranch==1)
            {
              coverBranch++;
            }
          })
        })


      })

      console.log("Total Statements "+statements);
      console.log("covered statements "+coverStat);
      console.log("Total functions "+functions);
      console.log("covered functions "+coverFn);
      console.log("Total branches "+branches);
      console.log("covered branches "+coverBranch);

      var statPercent=(coverStat/statements)*100;
      var branchPercent=(coverBranch/branches)*100;
      var fnPercent=(coverFn/functions)*100;
      statPercent=Math.round(statPercent * 100) / 100
      branchPercent=Math.round(branchPercent * 100) / 100
      fnPercent=Math.round(fnPercent * 100) / 100



    const htmlHintReport = htmlhintConfig.map((fileObj) => {
      return (
        <Card>
          <CardHeader
            title={fileObj.file}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
            <Table displayRowCheckbox={false} showRowHover={true}>
              <TableHeader displaySelectAll={false}>
                <TableRowColumn>Message</TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn>Line</TableRowColumn>
                <TableRowColumn>Column</TableRowColumn>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
                  {fileObj.messages.map((message) => {
                    return (
                      <TableRow>
                        <TableRowColumn style={{width:700}}>{message.message}</TableRowColumn>
                        <TableRowColumn>{message.line}</TableRowColumn>
                        <TableRowColumn>{message.col}</TableRowColumn>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardText>
        </Card>
      );
    });

    var icon='';
     var mochaReport= mochaConfig[0].suites.suites.map((mochaFile)=>
      {
        return (
        <Card>
          <CardHeader
            title={mochaFile.title}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
            <Table displayRowCheckbox={false} showRowHover={true}>
            <TableHeader displaySelectAll={false}>
                <TableRowColumn>Tests</TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn>Result</TableRowColumn>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
                  {mochaFile.tests.map((tests) => {
                    if(tests.pass==true)
                    {
                      icon=<Checkcircle/>
                    }
                    else{
                      icon=<Cancel/>
                    }
                    return (
                      <TableRow>
                        <TableRowColumn style={{width:700}}>{tests.title}</TableRowColumn>
                        <TableRowColumn style={{width:700}}>{icon}</TableRowColumn>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardText>
        </Card>
      );
      })

      const eslintReport =eslintConfig.map((eslintObj) => {
      return (
        <Card>
          <CardHeader
            title={eslintObj.filePath}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
           <Table displayRowCheckbox={false} showRowHover={true}>
              <TableHeader displaySelectAll={false}>
                <TableRowColumn>Message</TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn>Line</TableRowColumn>
                <TableRowColumn>Column</TableRowColumn>
                <TableRowColumn>Rule Id</TableRowColumn>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
                  {eslintObj.messages.map((message) => {
                    return (
                      <TableRow>
                        <TableRowColumn style={{width:500}}>{message.message}</TableRowColumn>
                        <TableRowColumn>{message.line}</TableRowColumn>
                        <TableRowColumn>{message.column}</TableRowColumn>
                        <TableRowColumn>{message.ruleId}</TableRowColumn>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardText>
        </Card>
      );
    });
      
  	 
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
                <Row>
                  <Col xs={12}>
                    <Card >
                    <CardHeader
                      title="HTMLHINT"
                      actAsExpander={true}
                      showExpandableButton={true}
                      style={{fontSize:25}}>
                    </CardHeader>
                    <CardText expandable={true}>
                    {htmlHintReport}  
                    </CardText>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Card >
                    <CardHeader
                      title="ESLINT"
                      actAsExpander={true}
                      showExpandableButton={true}
                      style={{fontSize:25}}>
                    </CardHeader>
                    <CardText expandable={true}>
                    {eslintReport}
                    </CardText>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Card >
                    <CardHeader
                      title="ISTANBUL"
                      actAsExpander={true}
                      showExpandableButton={true}
                      style={{fontSize:25}}>
                    </CardHeader>
                    <CardText expandable={true}>
                      <Table>
                        <TableHeader displaySelectAll={false}>
                          
                         
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>Statements Covered</TableRowColumn>
                            <TableRowColumn>Total</TableRowColumn>
                            <TableRowColumn>Percentage</TableRowColumn>
                          
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} showRowHover={true}>
                          <TableRow>
                            <TableRowColumn>Statements :</TableRowColumn>
                            <TableRowColumn>{coverStat}</TableRowColumn>
                            <TableRowColumn>{statements}</TableRowColumn>
                            <TableRowColumn>{statPercent}%</TableRowColumn>
                          </TableRow>
                          <TableRow>
                            <TableRowColumn>Branches :</TableRowColumn>
                            <TableRowColumn>{coverBranch}</TableRowColumn>
                            <TableRowColumn>{branches}</TableRowColumn>
                            <TableRowColumn>{branchPercent}%</TableRowColumn>
                          </TableRow>
                          <TableRow>
                            <TableRowColumn>Functions :</TableRowColumn>
                            <TableRowColumn>{coverFn}</TableRowColumn>
                            <TableRowColumn>{functions}</TableRowColumn>
                            <TableRowColumn>{fnPercent}%</TableRowColumn>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardText>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Card >
                    <CardHeader
                      title="MOCHA"
                      actAsExpander={true}
                      showExpandableButton={true}
                      style={{fontSize:25}}>
                    </CardHeader>
                    <CardText expandable={true}>
                    {mochaReport}
                    </CardText>
                    </Card>
                  </Col>
                </Row>
              </TableBody>
            </Table>
          </div>
        </Paper>
      </Grid>
    );
  	
  };
 }


export default Report;