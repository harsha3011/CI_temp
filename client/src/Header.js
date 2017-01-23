import React from 'react';
import {IndexLink, Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionBugReport from 'material-ui/svg-icons/action/bug-report';
import {Grid,Row,Col} from 'react-flexbox-grid'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import cookie from 'react-cookie'
import request from 'superagent';


export default class Header extends React.Component {

  componentDidMount()
  {
    const setUserInState = () => {
    this.setState({
      user: JSON.parse(localStorage.user)
    });
  };


  if(!localStorage.user) {
    request
    .get('http://172.23.238.186:9080/api/ci/auth/github/me')
    .end(function(err, response) {
      if(err) { throw err; }
      localStorage.user = JSON.stringify(response.body);
      setUserInState();

    });
  } else {
    setUserInState();

  }
  }

  handleLogout() {
    delete localStorage.user;
    cookie.remove('token');
  }

    render() {
      var user=JSON.parse(localStorage.user||null);

      if(user!==null)
      {
        var login=user.login;
        var title="Welcome "+login;
        var route="/"+login;
      }

      return (
        <AppBar title={title} iconElementLeft={<IconButton><ActionBugReport /></IconButton>}
        iconElementRight={<IconMenu iconButtonElement={<IconButton touch={true}>
          <NavigationExpandMoreIcon />
          </IconButton>
        }>
        <IndexLink  to={route} activeClassName="active"><MenuItem primaryText="Home" /></IndexLink>
        <Link to="/logout" activeClassName="active"><MenuItem primaryText="Logout" onClick={this.handleLogout.bind(this)}/> </Link>
         </IconMenu>}/>
      );
    }
}
