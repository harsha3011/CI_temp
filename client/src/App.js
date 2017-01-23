import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import cookie from 'react-cookie';
import request from 'superagent';
import jwt from 'jwt-decode';

function decodeToken(token) {
let decoded = jwt(token);
return(
  decoded.roles[0]);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      userType: false
    };
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }

  componentWillMount()
  {
    const setUserInState = () => {
      this.setState({
        user: JSON.parse(localStorage.user)
      });
    };

    const viewType = () => {
      const token = cookie.load('token');
      if(decodeToken(token) === 'admin') {
        this.setState({userType: true
        });
      }
      else
      {
        this.setState({userType: false
        });
      }
    };

    if(!localStorage.user) {
      request
      .get('http://172.23.238.223:9080/api/ci/auth/github/me')
      .end(function(err, response) {
        if(err) { throw err; }
        localStorage.user = JSON.stringify(response.body);
        console.log(localStorage.user);
        setUserInState();
        viewType();
      });
    } else {
      setUserInState();
      viewType();
    }
  }
 render() {
   return (
     <div>
             <Header />
              <div className="main" >
                  {this.props.children}
              </div>
              <Footer/>

    </div>
    );
  }
}

export default App;
