import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import _ from 'lodash';
import Request from 'superagent';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Chip from 'material-ui/Chip';
import request from 'superagent'
import Checkbox from 'material-ui/Checkbox';
import LintTest from './LintTest';
const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});
var newTest="";

class RubericSettings extends Component{

    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.something=this.something.bind(this);
        this.state = {
          value: '',
          add:false,
          name:'',
          esError:'',
          esWarning:''
        };
      }

      something() {
        request
        .get('http://localhost:9080/user')
        .end((err, res) => {
          this.setState({
            esError:res.body.ruberic.esLint.error,
            esWarning:res.body.ruberic.esLint.warning,

          });
      });
      }
      componentDidMount()
      {
        this.something();
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

    return(
      <Grid>
        <Paper style={{marginTop:'50'}}>
          <Row center="xs">
              <Col xs={12}>
                <h1>Ruberic Settings</h1><br/>
                <h2>Pipeline</h2>
              </Col>
          </Row>
          <Row xs="center">
            <Col xs={12}>
              <Tabs>
                <Tab label="LINTING" >
                  <Paper>
                    <List>
                      <Row >
                        <Col xs={12}>
                          <ListItem>
                          <Card>
                          <CardHeader
                              title="Es Lint"
                              actAsExpander={true}
                              showExpandableButton={true}
                           / >
                           <CardText expandable={true}>
                            Minimum Allowed Error threshold <TextField
                             floatingLabelText="Enter error threshold"
                             /><br />
                             Minimum Allowed Warning threshold <TextField
                             floatingLabelText="Enter warning threshold"
                             /><br />
                             <RaisedButton style={{marginLeft:500}} label="Confirm Setting" />
                             </CardText>
                          </Card>
                          </ListItem>
                          <ListItem>
                          <Card>
                            <CardHeader
                              title="HTML Lints"
                              actAsExpander={true}
                              showExpandableButton={true}
                           / >
                           <CardText expandable={true}>
                            Minimum Allowed Error threshold <TextField
                             floatingLabelText="Enter error threshold"
                             /><br />
                             Minimum Allowed Warning threshold <TextField
                             floatingLabelText="Enter warning threshold"
                             /><br />
                             <RaisedButton style={{marginLeft:500}} label="Confirm Setting" />
                             </CardText>
                          </Card>
                          </ListItem>
                          </Col>
                          </Row>
                      </List>
                    </Paper>
                  </Tab>
                  <Tab label="TESTING" >
                    <Paper>
                      <List>
                        <ListItem>
                        <Card>
                            <CardHeader
                              title="Automated Testing"
                              actAsExpander={true}
                              showExpandableButton={true}
                           / >
                           <CardText expandable={true}>
                          Maximum Allowed Failure threshold <TextField
                             floatingLabelText="Enter failure threshold"
                             /><br />
                             <RaisedButton style={{marginLeft:500}} label="Confirm Setting" />
                             </CardText>
                          </Card>
                        </ListItem>
                        <ListItem>
                          <Card>
                            <CardHeader
                              title="Test Coverage"
                              actAsExpander={true}
                              showExpandableButton={true}
                           / >
                           <CardText expandable={true}>
                             Minimum Allowed coverage threshold <TextField
                             floatingLabelText="Enter coverage threshold"
                             /><br />
                             <RaisedButton style={{marginLeft:500}} label="Confirm Setting" />
                           </CardText>
                          </Card>
                        </ListItem>
                      </List>
                    </Paper>
                    </Tab>
                    <Tab label="CUSTOM SCRIPTS" >
                      <Paper>
                          <List>
                              <ListItem>
                                  <Card>
                                    <CardHeader
                                    title="Email"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    >
                                    </CardHeader>
                                     <CardText expandable={true}>
                                          <span><Checkbox label="Should Pass" /> </span>
                                    </CardText>
                                  </Card>
                                </ListItem>
                                <ListItem>
                                  <Card>
                                    <CardHeader
                                    title="Additional Testing"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    >
                                    </CardHeader>
                                    <CardText expandable={true}>
                                        <span><Checkbox label="Should Pass" /> </span>
                                    </CardText>
                                  </Card>
                                </ListItem>
                              </List>
                      </Paper>
                    </Tab>
                  </Tabs>
                </Col>
                </Row>
          <br/>
          <Row center="xs">
          <Col xs={12}>
          <Link to="/ownerName/repoName/branch">
             <RaisedButton label="Go to Settings"/>
             </Link>
          </Col>
          </Row>
      </Paper>
    </Grid>
    );
  }
}
export default RubericSettings;
