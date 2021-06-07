import React, {useRef, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../contexts/authContext'
// import { GoogleLogin } from 'react-google-login';

function Signup() {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history= useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/addtrip')
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
    <div className="text-center mt-5 container fade">
      <div className="form-signin justify-content-center">
<form onSubmit={handleSubmit} className=" col-xs-6 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
<Link to="/"><img className="mb-4" src="./images/Logo.png" alt="" width="120" height="120" /></Link>
<h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
{error && <Alert variant= "danger">{error}</Alert>}

<div className="form-floating mb-2">
  <input ref={emailRef} required type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-2">
  <input ref={passwordRef} required type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
</div>
<div className="form-floating">
  <input ref={passwordConfirmRef} required type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Re-enter Password</label>
</div>
<small className="text-muted">If you already have an account click <Link style={{ color: 'primary', textDecoration: 'none' }} to="/login">here</Link>.</small>

<button disabled={loading} className="btn-color mt-2 w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
<p className="mt-5 mb-3 text-muted">© 2021</p>
</form>
</div>
        </div>
  </div>
    );
  }

export default Signup;