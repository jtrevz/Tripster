import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import './signup.css';
import { GoogleLogin } from 'react-google-login';
import Icon from '../components/icon.js'

function Signup(props) {
    
  // handleSubmit = () => {

  // };

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. ");
  }

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
      <div className="or text-center pt-3">
        or
      </div>
      <GoogleLogin
      clientId= "GOOGLE ID"
      render={(renderProps) => (
        <Button 
        className="tn btn-lg btn-google btn-block text-uppercase btn-outline" 
        variant="primary" 
        onClick={renderProps.onClick} 
        disabled={renderProps.disabled} 
        variant="contained">
          <img className="googleIcon" src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
          &nbsp;
          Sign In with Google
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy='single_host_origin'
      />
    </Form>
  </div>
    );
  }

export default Signup;