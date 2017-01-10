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
import LintTest from './lintTest';
const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});
var newTest="";


class TestSettings extends Component{

    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSaveClick=this.handleSaveClick.bind(this)
        this.state = {

          value: '',
          add:false,
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
         this.setState({
          add:true,
          });
      }
      handleClick =(event)=>{
         this.setState({
          add:false,
          });
      }

  render(){
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
          <Row>
            <Col>
              <Row start="xs">
                <Col xs={12}>
                 <Tabs>
                  <Tab label="LINTING" >
              <Paper>
               <List>
               <Row>
                 <Col xs={12}>
                 <ListItem>
                      <LintTest/>
                </ListItem>
                </Col>
                </Row>
                 <ListItem>
                  <LintTest/>
                </ListItem>
                </List>
                  </Paper>
                  </Tab>
                  <Tab label="TESTING" >
                    <Paper>
                     <List>
                 <ListItem>
                 <LintTest/>
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
                              >
                              </CardHeader>
                               <CardText expandable={true}>
                                    <TextField style={{textAlign:'center'}}
                                      floatingLabelText="Add a title"
                                    /><br />
                                     <Paper style={{backgroundColor:'black'}}>
                                      <MuiThemeProvider muiTheme={muiTheme}>
                                       <Grid>
                                        <Row>
                                          <Col xs={12}>
                                            <Row center="xs">
                                              <Col xs={6}>
                                                <TextField
                                                  multiLine={true}
                                                  defaultValue=""
                                                  fullWidth={true}
                                                />
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Grid>
                                      </MuiThemeProvider>
                                      </Paper>
                                      <br/>
                                     <Row center="xs">
                                              <Col xs={6}>
                                      <RaisedButton label="Submit" onClick={this.handleClick}/>
                                      </Col>
                                    </Row>
                              </CardText>
                            </Card>
                            </ListItem>
                            </List>
                          </Col>
                         </Row>
                            <Row start="xs">
                              <Col xsOffset={11} xs={1}>
                              <br/>
                               <FloatingActionButton mini={true} onClick={this.handleChange} >
                                  <ContentAdd />
                                  </FloatingActionButton>
                                 </Col>
                            </Row>
                            <br/>
                              { this.state.add ?
                                   <Row start="xs">
                                      <Col xs={12}>
                                      <List>
                                      <ListItem>
                                        <Card>
                                          <CardHeader
                                            title="Add your own shell script"
                                            actAsExpander={true}
                                            showExpandableButton={true}
                                          >
                                          </CardHeader>
                                           <CardText expandable={true}>
                                                <TextField style={{textAlign:'center'}}
                                                  floatingLabelText="Add a title"
                                                /><br />
                                                 <Paper style={{backgroundColor:'black'}}>
                                                  <MuiThemeProvider muiTheme={muiTheme}>
                                                   <Grid>
                                                    <Row>
                                                      <Col xs={12}>
                                                        <Row center="xs">
                                                          <Col xs={6}>
                                                            <TextField
                                                              multiLine={true}
                                                              defaultValue=""
                                                              fullWidth={true}
                                                            />
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Row>
                                                  </Grid>
                                                  </MuiThemeProvider>
                                                  </Paper>
                                                  <br/>
                                                 <Row center="xs">
                                                          <Col xs={6}>
                                                  <RaisedButton label="Submit" onClick={this.handleClick}/>
                                                  </Col>
                                                </Row>
                                          </CardText>
                                          </Card>
                                        </ListItem>
                            </List>
                                      </Col>
                                     </Row>
                                  : null}
                          </Col>
                        </Row>
                      </Grid>
                      </Paper>
                     </Tab>
                  </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
      <br/>
    <Grid>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12}><IndexLink to="/App/dash" activeClassName="active"><RaisedButton label="Save and go to dashboard" primary={true} onClick={this.handleSaveClick} ></RaisedButton></IndexLink>
            </Col>
          </Row>
       </Col>
      </Row>
    </Grid>
    </Paper>
    );
  }
}
export default TestSettings;