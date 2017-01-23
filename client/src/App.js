import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import cookie from 'react-cookie';
import jwt from 'jwt-decode';



class App extends Component {

<<<<<<< HEAD
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
=======
>>>>>>> 9c9e104af973b00465c5f044f18444ff13094c5e
 render() {
   return (
     <div>
             <Header/>
              <div className="main" >
                  {this.props.children}
              </div>
              <Footer/>

    </div>
    );
  }
}

export default App;
