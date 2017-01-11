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
const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});
var newTest="";


class CreatePipeline extends Component{

    constructor(props) {
        super(props);
        this.handleChangeCommands=this.handleChangeCommands.bind(this)
        this.handleChangeTitle=this.handleChangeTitle.bind(this)
        this.handleChange=this.handleChange.bind(this)

        this.handleSaveClick=this.handleSaveClick.bind(this)

        this.state = {
          //remove shellcmd and shelltitle
          setupCmds:'npm run eject',
          shellCmd:'',
          shellTitle:'',
          arrShell:[],
          esLintData:[],
          htmlData:[],
          automatedTestData:[]
        };
      }
      //create a component for custom shell commands
      changeEsLint(values)
      {
        this.setState({
          esLintData:values,
        });
      }
      changeHtmlLint(values)
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
      handleSaveClick=(event)=>{
        let that=this;    
        Request
        .get('http://localhost:9080/repo/myrepo/paurvi/pipeline')
        .end(function(err,resp)
        {
          if(resp.body)
          {
            var setupCmds=that.state.setupCmds;
            var esLintData=that.state.esLintData
            var htmlData=that.state.htmlData;
            Request
            .put('http://localhost:9080/repo/myrepo/paurvi/pipeline')
            .send({
              "setup": setupCmds,
              "stages": [{
                  "stage": "eslint",
                  "config": {
                    esLintData
                  }
              },
              {
                  "stage": "htmllint",
                  "config": {
                    htmlData
                  }
              }]
            })
            .end(function(err){
              console.log(err);
            });
          }
          else{
            var setupCmds=that.state.setupCmds;
            var esLintData=that.state.esLintData
            var htmlData=that.state.htmlData;
            Request
            .post('http://localhost:9080/repo/myrepo/paurvi/pipeline')
            .set('Content-Type', 'application/json')
            .send({
              "setup": setupCmds,
              "stages": [{
                  "stage": "eslint",
                  "config": {
                    esLintData
                  }
              },
              {
                  "stage": "htmllint",
                  "config": {
                    htmlData
                  }
              }]
            })
            .end(function(err){
              console.log(err);
            });
          }
        })

        
      }
      handleChange =(event)=>{
        var arr=this.state.arrShell;
        var obj={Title: this.state.shellTitle,
          Command:this.state.shellCmd
        }
        arr.push(obj);
        this.setState({
          arrShell:arr,
          shellTitle:'',
          shellCmd:''
        });
      }
       handleChangeCommands=(event)=>{
        this.setState({
          shellCmd: event.target.value
        });
      }
      handleChangeTitle=(event)=>{
         this.setState({
          shellTitle: event.target.value
        });
      }

  render(){
    const inputTitle=(
      <TextField
        floatingLabelText="Add a title"
        value={this.state.shellTitle}
        onChange={this.handleChangeTitle}
        />
      );
    const inputCommand=(
      <TextField
        multiLine={true}
        value={this.state.shellCmd}
        floatingLabelText="Add Commands"
        fullWidth={true}
        onChange={this.handleChangeCommands}
      />);
    const addingScript=(
      <FloatingActionButton onClick={this.handleChange} >
        <ContentAdd />
      </FloatingActionButton>
    );

   newTest=this.state.value;
   var temp=this.state.add;

   var text=`# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli`

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
        <h2>Setup Commands</h2>
        <Paper style={{backgroundColor:'black'}}>
        <MuiThemeProvider muiTheme={muiTheme}>
         <Grid>
          <Row>
            <Col xs={12}>
              <Row start="xs">
                <Col xs={12}>
                  <TextField
                    multiLine={true}
                    defaultValue={text}
                    fullWidth={true}
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
                <Col xs={12}><h2>Pipeline</h2></Col>
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
                    <List>
                      <Row>
                        <Col xs={12}>
                         <ListItem>
                         <Row>
                             <Col xs={12}>
                             <h2 style={{margin:10}}>Es Lint</h2>
                             </Col>
                           </Row>
                           <Row center="xs">
                             <Col xs={12}>
                             <LintTest data={this.state.esLintData}
                             onChange={this.changeEsLint.bind(this)}/>
                             </Col>
                           </Row>
                          </ListItem>
                        </Col>
                      </Row>
                         <ListItem>
                         <Row>
                              <Col xs={12}>
                              <h2 style={{margin:10}}>HTML Lint</h2>
                              </Col>
                            </Row>
                            <Row center="xs">
                              <Col xs={12}>
                              <LintTest data={this.state.htmlData}
                              onChange={this.changeHtmlLint.bind(this)}/>
                              </Col>
                            </Row>
                         </ListItem>
                    </List>
                  </Paper>
                </Tab>
                <Tab label="TESTING" >
                  <Paper>
                    <List>
                      <ListItem>
                      <Row>
                              <Col xs={12}>
                              <h2 style={{margin:10}}>Automated Testing</h2>
                              </Col>
                            </Row>
                            <Row center="xs">
                              <Col xs={12}>
                              <LintTest data={this.state.automatedTestData}
                              onChange={this.changeTestLint.bind(this)}/>
                              </Col>
                            </Row>
                      </ListItem>
                      <ListItem>
                        <Card>
                          <CardHeader
                            title="Test Coverage"
                            actAsExpander={true}
                            showExpandableButton={true}
                         / >
                        </Card>
                      </ListItem>
                    </List>
                  </Paper>
                </Tab>
                  <Tab label="CUSTOM SCRIPTS" >
                    <Paper>
                     <Grid>
                      <Row>
                        <Col xs={12}>
                          <Row start="xs">
                          <Col xs={12}>
                            <List>
                              <ListItem>
                                <Card>
                                  <CardHeader
                                    title="Add your own shell script"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                  />
                                  <CardText expandable={true}>
                                  {inputTitle}
                                  <br />
                                  <Paper style={{backgroundColor:'black'}}>
                                    <MuiThemeProvider muiTheme={muiTheme}>
                                     <Grid>
                                      <Row start="xs">
                                        <Col xs={6} xsOffset={3}>
                                         {inputCommand}
                                        </Col>
                                      </Row>
                                    </Grid>
                                    </MuiThemeProvider>
                                  </Paper>
                                  <br/>
                                </CardText>
                              </Card>
                            </ListItem>
                          </List>
                        </Col>
                      </Row>
                      <Row start="xs">
                        <Col xsOffset={9} xs={1} lgOffset={11}>
                           {addingScript}
                        </Col>
                      </Row>
                        <br/>
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
              <IndexLink to="/App/Build" activeClassName="active">
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
