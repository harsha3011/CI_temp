import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';
import cardImg from '../images/singleteam.jpg';
import cardImg1 from '../images/mutlipleteam.jpg';
import logo1 from '../images/mtlogo.jpg';
import logo2 from '../images/stlogo.jpg';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Request from 'superagent';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

const styles ={ 
    bar: {
        marginTop: '80',
        marginBottom: '100',
    },
};
class TeamType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            expanded: false,
            repoName: '',
            access_token: '',
            Rname:'',
        }
    }  
   
    handleChange = (value) => {
        this.setState({
            value: value,
            tabName: '',
        });
    };
    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    setTabName = (event) => {
        this.setState({
            tabName: this.state.value,
        });
    }
    componentWillMount() {

        const token = cookie.load('token');
        var decoded = jwtDecode(token);
        console.log(decoded.accessToken);

        this.setState({
            access_token: decoded.accessToken,
            Rname:this.props.params.repoName,
        });
    }


    teamType = (event) => {
        console.log(this.state.access_token);
        let reponame=this.state.Rname;
        var teamDetails = {
            'RepoName': this.props.params.repoName,
            'TeamType': this.state.tabName,
            'Access_token': this.state.access_token,
        }

        console.log(teamDetails);
        Request
            .post('http://localhost:9080/api/owner/reponame')
            .send(teamDetails)
            .end(function(err, res) {
              if(err){
                  alert(err);}
                console.log("Success");              
            });
    }

render() {
 console.log("im inside teamtype");
let link = '/ownerName/' + this.state.Rname + '/pipelineSettings';
const readyButton = ( <Row>
              <Col xs={12}>
                <Row center="xs">
            <IndexLink to={link} activeClassName="active" onTouchTap={this.teamType.bind(this)}>
            <RaisedButton  label="Ready for CI" primary={true}></RaisedButton></IndexLink>
                </Row>
              </Col>
            </Row>
);
return ( < Grid >
        < Paper style = { styles.bar } >
        < Tabs value = { this.state.value }
        onChange = { this.handleChange } >
        < Tab label = "Single Developer"
        value = "Single_User"
        onClick = { this.setTabName.bind(this) } >
        < div >
        < h4 style = { styles.headline } > Adding branches to your current repository is necessary to run CI < /h4> < Card expanded = { this.state.expanded }
        onExpandChange = { this.handleExpandChange } >
        < CardHeader title = "Single Developer Lay-Out"
        subtitle = "Basic Requirements"
        avatar = { logo1 }
        actAsExpander = { true }
        showExpandableButton = { true }
        /> < CardMedia expandable = { true } > < img src = { cardImg }
        /> < /CardMedia > < /Card> < List > < ListItem primaryText = "master(protected)"
        leftCheckbox = { < Checkbox checked = { true }
            disabled = { true }
            />} / >
            < ListItem primaryText = "dev"
            leftCheckbox = { < Checkbox checked = { true }
                disabled = { true }
                />}/ >
                < /List>  { readyButton } < /div > < /Tab> < Tab label = "Single Team"
                value = "Single_Team"
                onClick = { this.setTabName.bind(this) } >
                < div >
                < h4 style = { styles.headline } > Adding branches to your current repository is necessary to run CI < /h4> < Card expanded = { this.state.expanded }
                onExpandChange = { this.handleExpandChange } >
                < CardHeader
                title = "Single Team Lay-Out"
                subtitle = "Basic Requirements"
                avatar = { logo1 }
                actAsExpander = { true }
                showExpandableButton = { true }
                /> < CardMedia
                expandable = { true } >
                < img src = { cardImg }
                /> < /CardMedia > < /Card> < List > < ListItem primaryText = "master(protected)"
                leftCheckbox = { < Checkbox checked = { true }
                    disabled = { true }
                    />} / >
                    < ListItem primaryText = "dev"
                    leftCheckbox = { < Checkbox checked = { true }
                        disabled = { true }
                        />}/ >
                        < ListItem primaryText = "testing"
                        leftCheckbox = { < Checkbox checked = { true }
                            disabled = { true }
                            />} / >
                            < /List> { readyButton } < /div > < /Tab> < Tab label = "Multiple Teams"
                            value = "Multiple_Team"
                            onClick = { this.setTabName.bind(this) } >
                            < div >
                            < h4 style = { styles.headline } > Adding branches to your current repository necessary to run CI < /h4> < Card expanded = { this.state.expanded }
                            onExpandChange = { this.handleExpandChange } >
                            < CardHeader
                            title = "Multiple Team Lay-Out "
                            subtitle = "Basic Requirements"
                            avatar = { logo2 }
                            actAsExpander = { true }
                            showExpandableButton = { true }
                            /> < CardMedia
                            expandable = { true } >
                            < img src = { cardImg1 }
                            /> < /CardMedia > < /Card> < List > < ListItem primaryText = "master(protected)"
                            leftCheckbox = { < Checkbox checked = { true }
                                disabled = { true }
                                />} / >
                                < ListItem primaryText = "Integration(protected)"
                                leftCheckbox = { < Checkbox checked = { true }
                                    disabled = { true }
                                    />} / >
                                    < ListItem primaryText = "dev"
                                    leftCheckbox = { < Checkbox checked = { true }
                                        disabled = { true }
                                        />}/ >
                                        < ListItem primaryText = "testing"
                                        leftCheckbox = { < Checkbox checked = { true }
                                            disabled = { true }
                                            />} / >
                                            < /List>  { readyButton } < /div > < /Tab> < /Tabs > < /Paper> < /Grid >


                                        );
                                    }
                                }


                                            export default TeamType;
