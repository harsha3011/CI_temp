import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import cookie from 'react-cookie';
import jwt from 'jwt-decode';



class App extends Component {

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
