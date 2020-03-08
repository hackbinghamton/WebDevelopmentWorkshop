import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Control,
  Button
} from "react-bootstrap";
import NavBar from './NavBar.js';

import './SignUp.css';

class SignUp extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPW: ""
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
     <div className="SignUp">
      <NavBar/>
      <h1>Welcome to HackBU.</h1> 
      <div className="content">
      <Form>
        <Form.Group controlId="formName">
          <Form.Control className="bubble" type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control className="bubble" type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control className="bubble" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control className="bubble" type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Sign Up
        </Button>
      </Form>
      </div>
    </div>
  );
  }
}

export default SignUp;
