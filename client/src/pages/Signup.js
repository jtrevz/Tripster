import React, {useRef, useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../contexts/authContext'
import './signup.css';
// import { GoogleLogin } from 'react-google-login';

function Signup() {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  };

  // const googleSuccess = async (res) => {
  //   // const result = res?.profileObj;
  //   // const token = res?.tokenId;
  //   console.log(res);
  //   try {

  //   } catch(error){
  //     console.log(error);
  //   }
  // };

  // const googleFailure = (error) => {
  //   console.log("Google Sign In was unsuccessful. ");
  // }

  return (
  <div>
    <Form className="SIGNUP"
    onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      {error && <Alert variant= "danger">{error}</Alert>}
          {/* <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" ref={nameRef} placeholder="Enter full name" required/>
          </Form.Group> */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
      </Form.Group>
      <Form.Group controlId="formBasicPasswordConfirm">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Password" required/>
      </Form.Group>
      <Button disabled={loading} className="btn-lg btn-block" variant="primary" type="submit">
        Submit
      </Button>
      <div className="or text-center pt-3">
        or
      </div>
      {/* <GoogleLogin
      clientId= "490208347772-9h1p2je2vm9tq47jrpu8q5733p4i65c3.apps.googleusercontent.com"
      render={(renderProps) => (
        <Button 
        className="tn btn-lg btn-google btn-block text-uppercase btn-outline" 
        variant="primary" 
        onClick={renderProps.onClick} 
        disabled={renderProps.disabled} 
        variant="contained">
          <img className="googleIcon" alt="Google Alt" src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
          &nbsp;
          Sign In with Google
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy='single_host_origin'
      /> */}
    </Form>
  </div>
    );
  }

export default Signup;