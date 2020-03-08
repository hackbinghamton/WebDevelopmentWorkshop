import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  constructor(props){
    super(props);
    // LinkRedirect1 should be either Download or Get Started
    // LinkRedirect2 should be either Sign Out or Sign In

    this.state = {
      LinkRedirect1: "SignUp",
      LinkRedirect2: "SignIn"
    };
  }

  getButtonTitle(param) {
    if (param == "SignUp") return "Get Started";
    if (param == "SignIn") return "Sign In";
    return param;
  }


  render() {
    // if (localStorage.getItem('userID') != null) {
    //   alert("Link redirects set");
    //   this.setState({LinkRedirect1: 'Download', LinkRedirect2: 'SignOut'});
    // }

    let button1;
    let button2;

    const aStyle = {
      float: 'right',
      border: 'none',
      fontWeight: '900'
    };

    const startStyle = {
      float: 'right',
      backgroundColor: '#D9646A',
      color: 'white',
      borderRadius: '32px',
      border: 'none'
    };

    if (localStorage.getItem('userID') != null) {
      button1 = <Link to={'/Download'} style={startStyle} className="hvr-grow underline">Download</Link>;
      button2 = <Link to={'/SignOut'} style={aStyle} className="underline">Sign Out</Link>;
    } else {
      button1 = <Link to={'/SignUp'} style={startStyle} className="hvr-grow underline">Get Started</Link>;
      button2 = <Link to={'/SignIn'} style={aStyle} className="underline">Sign In</Link>;
    }

    return (
      <header className="topnav">
      <Link to={`/`}>HackBU</Link>
      {button1}
      {button2}
      </header>
    );
  };
}

export default NavBar;
