import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Control,
  Button
} from "react-bootstrap";
import NavBar from './NavBar.js';

import './SignUp.css';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  async attemptSignIn() {
    const response = await fetch(process.env.REACT_APP_SITENAME + "login.php?email="+this.state.email+"&password="+this.state.password);
    const data = await response.json();

    if (data.user) {
      localStorage.setItem("userID", data.user.userID);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("password", this.state.password);
      window.location.href="/Home";
    }
    //alert(JSON.stringify(data.user));
  };

  pwChanged = event => {
    this.setState({
      password: event.target.value
    });
  }

  emailChanged = event => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.email.length > 0 && this.state.password.length > 0) this.attemptSignIn();
  }

  render() {
    return (
      <div className="SignUp">
       <NavBar/>
      <h1>Sign in to HackBU.</h1>
       <div className="content">
       <Form onSubmit={this.submitFormHandler}>
         <Form.Group controlId="email">
           <Form.Control className="bubble" type="email" placeholder="E-mail" onChange={this.emailChanged}/>
         </Form.Group>
         <Form.Group controlId="password">
           <Form.Control className="bubble" type="password" placeholder="Password" onChange={this.pwChanged} />
         </Form.Group>

         <Button variant="primary" type="submit" className="submit" onClick={this.handleSubmit}>
           Sign In
         </Button>
       </Form>
       </div>
     </div>
  );
  }
}

export default SignIn;
