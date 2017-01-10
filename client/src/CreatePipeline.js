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
          shellCmd:'',
          shellTitle:'',
          arrShell:[]
        };
      }
      

      handleSaveClick=(event)=>{

        console.log("hello");
        Request
        .put('http://localhost:9080/repo/hgjj/pipeline')
        .set('Content-Type', 'application/json')
        .send({
        "setup": "npm install",
  "stages": [{
      "stage": "eslint",
      "config": {
        "include": ["src/**/*.js(|x)", "test/**/*.js(|x)"],
        "exclude": ["node_modules/**/*.js", "bower_components/**/*"]
      }
    }, {
      "stage": "htmllint",
      "config": {
        "include": ["src/**/*.(xhtml|html)", "test/**/*.(xhtml|html)"],
        "exclude": ["node_modules/**/*", "bower_components/**/*"]
      }
    }, {
      "stage": "automated testing",
      "config": {
        "include": ["src/**/*.(js)", "test/**/*.(js)"],
        "exclude": ["node_modules/**/*", "bower_components/**/*"]
      }
    }, {
      "stage": "test coverage",
      "config": {}
    }, {
      "stage": "shell",
      "config": {
        "cmd": "sendmail"
      }
    }]})
        .end(function(resp){
          // ...
        });
      }
      handleChange =(event)=>{

        this.state.arrShell.push(this.state.shellTitle);
        this.state.arrShell.push(this.state.shellCmd);
          console.log(this.state.arrShell);
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
              <Col xs={12}><h1>Test Settings</h1><br/></Col>
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
                              <LintTest text={"Es Lint"}/>
                            </ListItem>
                          </Col>
                        </Row>
                           <ListItem>
                             <LintTest text={"HTML Lint"}/>
                           </ListItem>
                      </List>
                    </Paper>
                  </Tab>
                  <Tab label="TESTING" >
                    <Paper>
                      <List>
                        <ListItem>
                          <LintTest text={"Automated Testing"}/>
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
                                        <Row>
                                          <Col xs={12}>
                                            <Row center="xs">
                                              <Col xs={6}>
                                               {inputCommand}
                                              </Col>
                                            </Row>
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
                            <Col xsOffset={11} xs={1}>
                              <br/>
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