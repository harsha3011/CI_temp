import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import cardImg from '../images/singleteam.jpg';
import cardImg1 from '../images/mutlipleteam.jpg';
import logo1 from '../images/mtlogo.jpg';
import logo2 from '../images/stlogo.jpg';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import {Grid, Row, Col} from'react-flexbox-grid';
import Request from 'superagent';
    const styles={
        bar:{
            marginTop:'80',
            marginBottom:'100',
        },
    };
    class TeamType extends Component{
        constructor(props) {
            super(props);
            this.state = {
              value: 'a',
              expanded: false,
            };
        }
        handleChange = (value) => {
            this.setState({
              value: value,
              tabName:'',
            });
        };
        handleExpandChange = (expanded) => {
            this.setState({expanded: expanded});
        };
        componentWillMount()
      {
        var getFiles=JSON.parse(window.localStorage.getItem("repoData"));
        this.setState({
          configFiles:getFiles
        });
      }
      setTabName=(event)=>{
        this.setState({
            tabName:this.state.value,
          });
      }
      teamType=(event)=>{
        
        var teamDetails={'RepoName':this.state.configFiles.name,
                     'TeamType': this.state.tabName,
                   }

          console.log(teamDetails);
          Request
                .post('http://localhost:9080/api/owner/reponame')
                .send(teamDetails)
                .end(function(err, res) {
                    console.log(res);
                });          

      }

        render(){
            return(
                <Grid>
                <Paper style={styles.bar}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    <Tab label="Single Developer" value="Single_User" onClick={this.setTabName.bind(this)}>
                          <div>
                            <h4 style={styles.headline}>Adding branches to your current repository is necessary to run CI</h4>
                            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                            <CardHeader
                              title="Single Developer Lay-Out"
                              subtitle="Basic Requirements"
                              avatar={logo1}
                              actAsExpander={true}
                              showExpandableButton={true}
                            />
                            <CardMedia
                              expandable={true}
                            >
                              <img src={cardImg} />
                            </CardMedia>
                            </Card>
                            <List>
                                <ListItem primaryText="master(protected)" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                                <ListItem primaryText="dev" leftCheckbox={<Checkbox checked={true} disabled={true}/>}/>
                            </List> 
                          </div>
                        </Tab>
                        <Tab label="Single Team" value="Single_Team" onClick={this.setTabName.bind(this)} >
                          <div>
                            <h4 style={styles.headline}>Adding branches to your current repository is necessary to run CI</h4>
                            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                            <CardHeader
                              title="Single Team Lay-Out"
                              subtitle="Basic Requirements"
                              avatar={logo1}
                              actAsExpander={true}
                              showExpandableButton={true}
                            />
                            <CardMedia
                              expandable={true}
                            >
                              <img src={cardImg} />
                            </CardMedia>
                            </Card>
                            <List>
                                <ListItem primaryText="master(protected)" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                                <ListItem primaryText="dev" leftCheckbox={<Checkbox checked={true} disabled={true}/>}/>
                                <ListItem primaryText="testing" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                            </List> 
                          </div>
                        </Tab>
                        <Tab label="Multiple Teams" value="Multiple_Team" onClick={this.setTabName.bind(this)}>
                          <div>
                            <h4 style={styles.headline}>Adding branches to your current repository necessary to run CI</h4>
                             <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                            <CardHeader
                              title="Multiple Team Lay-Out"
                              subtitle="Basic Requirements"
                              avatar={logo2}
                              actAsExpander={true}
                              showExpandableButton={true}
                            />
                            <CardMedia
                              expandable={true}
                            >
                              <img src={cardImg1} />
                            </CardMedia>
                            </Card>
                            <List>
                                <ListItem primaryText="master(protected)" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                                <ListItem primaryText="Integration(protected)" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                                <ListItem primaryText="dev" leftCheckbox={<Checkbox checked={true} disabled={true}/>}/>
                                <ListItem primaryText="testing" leftCheckbox={<Checkbox checked={true} disabled={true}/>} />
                            </List> 
                          </div>
                        </Tab>
                    </Tabs>
                    <Row>
                      <Col xs={12}>
                        <Row center="xs">
                    <IndexLink to="/ownerName/repoName/pipelineSettings" activeClassName="active" onTouchTap={this.teamType.bind(this)}><RaisedButton style={styles.button} label="Ready for CI" primary={true}></RaisedButton></IndexLink>
                        </Row>
                      </Col>
                    </Row>
                    <br/>
                </Paper>
                </Grid>
                
                
                );
            }
        }

export default TeamType;