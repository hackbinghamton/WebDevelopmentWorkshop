import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import { Button } from "react-bootstrap";

import './SignUp.css';

class SignOut extends Component {

  constructor(props) {
    super(props);

    localStorage.clear();

  }

  render() {
    return (
      <div className="SignUp">
       <NavBar/>
      <h1>You are now signed out of HackBU.</h1>
       <div className="contentSignOut">
         <Link to="/Home" className="submit">Go Home</Link>
         <h1>Or</h1>
          <Link to="/SignIn" className="signOutBtn">Sign back in</Link>
          <Link to="/SignUp" className="signOutBtn">Create account</Link>
       </div>
     </div>
   );
  }
}

export default SignOut;
