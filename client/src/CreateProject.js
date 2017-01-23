import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import { IndexLink, Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Dialog from 'material-ui/Dialog';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Request from 'superagent';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            valueLicense: 1,
            newRepository: '',
            desc: '',
            checkd: '',
            access_token: '',
            repoData: {
                'name': '',
                'description': '',
                'Access_Token': ''
            }
        }
<<<<<<< HEAD
    }
    componentWillMount() {
=======
      }

        createRepo = (event) => {

          let obj ={
                     'name':this.state.newRepository,
                     'description': this.state.desc,
              }

                this.setState({ repoData: obj });

            Request
                .post('http://172.23.238.186:9080/api/srishtinanda/repos')
                .send(obj)
                .end(function(err, res) {
                    console.log(res);
                });
>>>>>>> 9c9e104af973b00465c5f044f18444ff13094c5e

        const token = cookie.load('token');
        var decoded = jwtDecode(token);
        console.log(decoded.accessToken);

        this.setState({
            access_token: decoded.accessToken,
        });
    }


    createRepo = (event) => {

        let obj = {
            'name': this.state.newRepository,
            'description': this.state.desc,
            'Access_Token': this.state.access_token,
        }
<<<<<<< HEAD

        this.setState({ repoData: obj });

        Request
            .post('http://localhost:9080/api/srishtinanda/repos')
            .send(obj)
            .end(function(err, res) {
                console.log(res);
=======
        handleChange = (event, index, value) => this.setState({ value });
        handleChangeLicense = (event, index, valueLicense) => this.setState({ valueLicense });

        state = {
            open: false,
            openReadme: false
        };



        handleOpenReadme = () => {
            this.setState({ openReadme: true });
        };


        handleCloseReadme = () => {
            this.setState({ openReadme: false });
        };
        handleChangename = (event) => {
            this.setState({
                newRepository: event.target.value,
            });
        }
        handleChangedesc = (event) => {
            this.setState({
                desc: event.target.value,
>>>>>>> 9c9e104af973b00465c5f044f18444ff13094c5e
            });

    }
    handleChange = (event, index, value) => this.setState({ value });
    handleChangeLicense = (event, index, valueLicense) => this.setState({ valueLicense });

    state = {
        open: false,
        openReadme: false
    };



    handleOpenReadme = () => {
        this.setState({ openReadme: true });
    };


    handleCloseReadme = () => {
        this.setState({ openReadme: false });
    };
    handleChangename = (event) => {
        this.setState({
            newRepository: event.target.value,
        });
    }
    handleChangedesc = (event) => {
        this.setState({
            desc: event.target.value,
        });
    }


    render() {
        var repoName = this.state.newRepository;
        var link = '/ownerName/' + repoName + '/teamtype'

        const actions = [ < FlatButton
            label = "OK"
            primary = { true }
            keyboardFocused = { true }
            onTouchTap = { this.handleClose }
            />,
        ];
        const actionsReadme = [ < FlatButton
            label = "OK"
            primary = { true }
            keyboardFocused = { true }
            onTouchTap = { this.handleCloseReadme }
            />,
        ];
        return ( < Grid >
            < Row style = {
                { marginTop: 60, marginBottom: 60 }
            } >
            < Col xs = { 12 } >
            < Row center = "xs" >
            < Col xs = { 10 } >
            < Paper zDepth = { 5 } >
            < br / >
            < h1 > CREATE REPOSITORY < /h1> < h5 > A repository contains all the files
            for your project, including the revision history. < /h5>

            < TextField icon = { < ActionInfo / > }
            hintText = "Enter Repository Name"
            floatingLabelText = "Repository Name"
            value = { this.state.newRepository }
            onChange = { this.handleChangename.bind(this) }
            /><br / >
            < TextField hintText = "Description"
            floatingLabelText = "Description (optional)"
            value = { this.state.desc }
            onChange = { this.handleChangedesc.bind(this) }
            /><br / >

            < br / >

            < Row >
            < Col lgOffset = { 4 }
            lg = { 3 }
            xs = { 9 } >
            < Checkbox label = "Initialize this repository with a README" / >
            < /Col> < Col xs = { 1 } > < IconButton onTouchTap = { this.handleOpenReadme } > < ActionInfo / > < /IconButton> < Dialog title = "Use of README"
            actions = { actionsReadme }
            modal = { false }
            open = { this.state.openReadme }
            onRequestClose = { this.handleCloseReadme } > This will
            let you immediately clone the repository to your computer.Skip this step
            if you’ re importing an existing repository. < /Dialog> < /Col > < /Row> < br / >

            < Row center = "lg" >
            < Col lg = { 2 }
            xs = { 6 } >
            < p > Add.gitignore < /p> < /Col > < Col xs = { 6 }
            lg = { 2 } >
            < DropDownMenu value = { this.state.value }
            onChange = { this.handleChange }
            autoWidth = { true } >
            < MenuItem value = { 1 }
            primaryText = "None" / >
            < MenuItem value = { 2 }
            primaryText = "Actionscript" / >
            < MenuItem value = { 3 }
            primaryText = "Ada" / >
            < MenuItem value = { 4 }
            primaryText = "Agda" / >
            < MenuItem value = { 5 }
            primaryText = "Android" / >
            < MenuItem value = { 6 }
            primaryText = "AppEngine" / >
            < MenuItem value = { 7 }
            primaryText = "Appcelerator Titanium" / >
            < MenuItem value = { 8 }
            primaryText = "ArchLinux Packages" / >
            < /DropDownMenu> < /Col > < /Row>

            < Row center = "lg" >
            < Col xs = { 6 }
            lg = { 2 } >
            < p > Add license < /p> < /Col > < Col xs = { 6 }
            lg = { 2 } >
            < DropDownMenu value = { this.state.valueLicense }
            onChange = { this.handleChangeLicense }
            autoWidth = { true } >
            < MenuItem value = { 1 }
            primaryText = "None" / >
            < MenuItem value = { 2 }
            primaryText = "Apache License 2.0" / >
            < MenuItem value = { 3 }
            primaryText = "GNU General Public License " / >
            < MenuItem value = { 4 }
            primaryText = "MIT" / >
            < /DropDownMenu> < /Col > < /Row> < br / >

            < RaisedButton primary = { true } > < Link to = { link }
            onTouchTap = { this.createRepo.bind(this) }
            style = {
                { textDecoration: 'none', color: 'white' }
            } > Create Repository < /Link> < /RaisedButton > < br / >
            < br / >
            < /Paper> < /Col > < /Row> < /Col > < /Row> < /Grid >
        );
    }

}

export default CreateProject;
