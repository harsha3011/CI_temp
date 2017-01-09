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
export default class Header extends React.Component {
    render() {
   
      return (
        <AppBar title="Welcome User" iconElementLeft={<IconButton><ActionBugReport /></IconButton>}
        iconElementRight={<IconMenu iconButtonElement={<IconButton touch={true}>
          <NavigationExpandMoreIcon />                     
          </IconButton>                     
        }>
        <IndexLink  to="/App" activeClassName="active"><MenuItem primaryText="Home" /></IndexLink>
        <Link to="/logout" activeClassName="active"><MenuItem primaryText="Logout"/> </Link>                 
         </IconMenu>}/>   
      );
    }
}