import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {IndexLink, Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import _ from 'lodash';
import Request from 'superagent';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import LintTest from './LintTest';
import MultiScriptConfig from './MultiScriptConfig';
import Checkbox from 'material-ui/Checkbox';


const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});
var newTest="";


class CreatePipeline extends Component{

    constructor(props) {
        super(props);

        this.handleSaveClick=this.handleSaveClick.bind(this);
        this.handleCheckbox=this.handleCheckbox.bind(this);
        this.handleSaveClick=this.handleSaveClick.bind(this);

        this.state = {
          //remove shellcmd and shelltitle
          setupCmds:`# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli`,
          esLintData:[],
          htmlData:[],
          arrShell:[],
          testCoverageData:false,
          automatedTestData:[],
        };
      }
      //create a component for custom shell commands
      changeEsLint(values)
      {
        this.setState({
          esLintData:values,
        });
      }
      handleCheckbox(event)
      {
        this.setState({
          testCoverageData:event.target.checked
        });

      }
      changehtmlhint(values)
      {
        this.setState({
          htmlData:values,
        });
      }
      changeTestLint(values)
      {
        this.setState({
          automatedTestData:values,
        });
      }
      handleSetup=(event)=>{
      	this.setState({
      			setupCmds:event.target.value,
      		});
       }

       handleSaveClick=(event)=>{
        var files={setup: this.state.setupCmds,
                  stages: [{
                    stage: "eslint",
                    config: this.state.esLintData
                    },
                    {
                      stage: "htmllint",
                      config: this.state.htmlData
                    },
                    {
                      stage: "automated tests",
                      config: this.state.automatedTestData
                    },
                    {
                      stage: "testcoverage",
                      config: this.state.testCoverageData
                    },
                    {
                      stage:"custom scripts",
                      config:this.state.arrShell
                    }
                  ]};
                console.log(files);
        Request
        .get('http://localhost:9080/repo/myrepo/paurvi/pipeline')
        .end(function(err,resp)
        {
          if(resp.body)
          {
            Request
            .put('http://localhost:9080/repo/myrepo/paurvi/pipeline')
            .send(files)
            .end(function(err){
              console.log(err);
            });
          }
          else{
            Request
            .post('http://localhost:9080/repo/myrepo/paurvi/pipeline')
            .set('Content-Type', 'application/json')
            .send(files)
            .end(function(err){
              console.log(err);
            });
          }
        })
      }
  render(){

  return(
    <Paper>
        <Grid>
          <Row>
            <Col xs={12}>
            <Row center="xs">
              <Col xs={12}><h1>Test Settings</h1></Col>
            </Row>
            </Col>
          </Row>
        </Grid>
        <h3>Setup Commands</h3>
        <Paper style={{backgroundColor:'black'}}>
        <MuiThemeProvider muiTheme={muiTheme}>
         <Grid>
          <Row>
            <Col xs={12}>
              <Row start="xs">
                <Col xs={12}>
                  <TextField
                    multiLine={true}
                    defaultValue={this.state.setupCmds}
                    fullWidth={true}
                    onChange={this.handleSetup.bind(this)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        </MuiThemeProvider>
        </Paper>
        <Grid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={12}><h3>Pipeline</h3></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row center="xs">
            <Col xs={12}>
              <Tabs>
                <Tab label="LINTING" >
                  <Paper>
                       	<Row>
                          <Col xs={12}>
                           <h3 style={{marginLeft:10}}>Es Lint</h3>
                          </Col>
                         </Row>
                         <Row center="xs">
                           <Col xs={12}>
                           <LintTest data={this.state.esLintData}
                           onChange={this.changeEsLint.bind(this)}/>
                           </Col>
                         </Row>

                    <Row>
                      <Col xs={12}>
                        <h3 style={{marginLeft:10}}>HTML Lint</h3>
                      </Col>
                    </Row>
                    <Row center="xs">
                      <Col xs={12}>
                      <LintTest data={this.state.htmlData}
                      onChange={this.changehtmlhint.bind(this)}/>
                      </Col>
                    </Row>
                </Paper>
                </Tab>
                <Tab label="TESTING" >
                  <Paper>
                    <Row>
                      <Col xs={12}>
                        <h3 style={{marginLeft:10}}>Automated Testing</h3>
                      </Col>
                    </Row>
                    <Row center="xs">
                      <Col xs={12}>
                        <LintTest data={this.state.automatedTestData}
                          onChange={this.changeTestLint.bind(this)}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <h3 style={{marginLeft:10}}>Code Coverage</h3>
                      </Col>
                    </Row>
                    <Row center="xs">
                      <Col xs={12}>
                    		<Card>
                          <CardHeader
                            title="Click here to Configure"
                            actAsExpander={true}
                            showExpandableButton={true}
                          />
                         <CardText expandable={true}>
                        <Checkbox label="Should pass" onClick={this.handleCheckbox}/>
                      </CardText>
                    </Card>
                   </Col>
                  </Row>
                </Paper>
                </Tab>
                  <Tab label="CUSTOM SCRIPTS" >
                    <Paper>
                     <Grid>
                      <Row>
                        <Col xs={12}>
                         <MultiScriptConfig/>
                        </Col>
                      </Row>
                  </Grid>
                </Paper>
              </Tab>
            </Tabs>
         </Col>
      </Row>
    </Grid>
      <br/>
    <Grid>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12}>
              <IndexLink to="/ownerName" activeClassName="active">
                <RaisedButton label="Save and go to dashboard" primary={true} onClick={this.handleSaveClick}/>
              </IndexLink>
            </Col>
          </Row>
       </Col>
      </Row>
    </Grid>
  </Paper>
  );
 }
}
  export default CreatePipeline;
