import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import './signup.css';
import { GoogleLogin } from 'react-google-login';
import Icon from './'

function Signup(props) {
    
  // handleSubmit = () => {

  // };
  return (
        <div>
<Form className ="signUp">
  <h1>Sign Up</h1>
  <Row>
    <Col>
      <Form.Group controlId="formBasicfName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Enter first name" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group controlId="formBasiclname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Enter last name" />
      </Form.Group>
    </Col>
  </Row>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Re-Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btn-lg btn-block" variant="primary" type="submit">
    Submit
  </Button>
  <div className="text-center pt-3">
    Or sign up with your Google Account
  </div>
  <GoogleLogin
  clientId= "GOOGLE ID"
  render={(renderProps) => (
    <Button 
    className="idk" 
    color="primary" 
    onClick={renderProps.onClick} 
    disabled={renderProps.disabled} 
    // startIcon={<Icon/>} 
    variant="contained">
      Google Sign In
    </Button>
  )}
  />
</Form>
        </div>
    );
  }

  export default Signup;