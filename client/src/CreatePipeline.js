import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Card, CardHeader,CardText} from 'material-ui/Card';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import _ from 'lodash';
import Request from 'superagent';
import {Tabs, Tab} from 'material-ui/Tabs';
import LintTest from './LintTest';
import MultiScriptConfig from './MultiScriptConfig';
import Checkbox from 'material-ui/Checkbox';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});

class CreatePipeline extends Component{

    constructor(props) {
        super(props);
        this.handleCheckbox=this.handleCheckbox.bind(this);
        this.getRepoData=this.getRepoData.bind(this);

        this.state = {
          //remove shellcmd and shelltitle
          setupCmds:`# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
# We use npm to install any Node.js (or io.js) version you require.
# npm install 4.0
# Clone your repository for running your tests or other tasks
# Installing corresponding modules as per your package.json`,
          esLintData:[],
          htmlData:[],
          arrShell:[],
          testCoverageData:false,
          automatedTestData:[],
          repo_Ref:[]
        };
      }
      getRepoData(repoName){
        console.log();

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
       static get contextTypes() {
              return {
                router: React.PropTypes.object.isRequired
              };
            }
      componentDidMount() {
        let url = `https://api.github.com/repos/${this.props.params.ownerName}/${this.props.params.repoName}/branches`
         let arr=[];
         Request
         .get(url)
         .end((err, res)=>{
            res.body.map((obj)=>{
              console.log(obj);
               arr.push(obj.name);
             });
              this.setState({
                repo_Ref:arr,
              });
         });
      }
      componentDidMount() {
        let url = `https://api.github.com/repos/${this.props.params.ownerName}/${this.props.params.repoName}/branches`
         let arr=[];
         Request
         .get(url)
         .end((err, res)=>{
            res.body.map((obj)=>{
              console.log(obj);
               arr.push(obj.name);
             });
              this.setState({
                repo_Ref:arr,
              });
         });
      }

       handleSaveClick=(event)=>{
        let ownerName=this.props.params.ownerName;
        let repoName=this.props.params.repoName;
        const token = cookie.load('token');
       var decoded = jwtDecode(token);
       var access=decoded.accessToken;

        var files={
                  repo_URL:'https://github.com/'+ownerName+'/'+repoName+'.git',
                  repo_Ref:this.state.repo_Ref,
                  setup: this.state.setupCmds,
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
                  ],
                  access_token:access
                };

        Request
        .get('http://localhost:9080/api/'+ownerName+'/'+repoName+'/projects')
        .end((err,resp) =>
        {
          console.log('err-ppp',err);
          console.log('ppp',resp);
          if(resp.body)
          {
            console.log("if yes")
            Request
            .put('http://localhost:9080/api/'+ownerName+'/'+repoName+'/projects')
            .send(files)
            .end((err) => {
              console.log(err);
              this.context.router.push('/app/'+ownerName);
            });
          }
          else{
            console.log("new one");
            console.log(ownerName);
            Request
            .post('http://localhost:9080/api/'+ownerName+'/'+repoName+'/projects')
            .set('Content-Type', 'application/json')
            .send(files)
            .end((err) => {
              console.log(err);

              this.context.router.push('/app/'+ownerName);
            });
          }
        });



      }
  render(){
    console.log(this.state.repo_Ref);
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
                <RaisedButton label="Save and go to dashboard" primary={true} onClick={this.handleSaveClick.bind(this)}/>
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
