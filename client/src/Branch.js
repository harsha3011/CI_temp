

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
    const styles={
        bar:{
            marginTop:'80',
            marginBottom:'100',
        },
    };
    class Branch extends Component{
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
            });
        };
        handleExpandChange = (expanded) => {
            this.setState({expanded: expanded});
        };
        render(){
            return(
                <Grid>
                <Paper style={styles.bar}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Single Team" value="a" >
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
                        <Tab label="Multiple Teams" value="b">
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
                    <IndexLink to="/App/branchpath" activeClassName="active"><RaisedButton style={styles.button} label="Ready for CI" primary={true}></RaisedButton></IndexLink>
                        </Row>
                      </Col>
                    </Row>
                    <br/>
                </Paper>
                </Grid>
                
                
                );
            }
        }

export default Branch;