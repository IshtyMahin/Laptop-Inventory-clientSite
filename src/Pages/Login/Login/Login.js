
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../ScocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending){
    return <Loading></Loading>

  }
  
  if(user){
      navigate(from,{replace: true});
      
  }
  
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
}
const handleSubmit = event => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  signInWithEmailAndPassword(email, password);
}
const navigateRegister = (event) => {
  navigate('/register')
};

const resetPassword = async () => {
  const email = emailRef.current.value;
  if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
  }
  else{
      toast('please enter your email address');
  }
}
  
 

  
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={resetPassword}  variant="link">Forget password? </Button>
        <p className="text-danger">{error?.message}</p>
        <Button  variant="primary" type="submit">
          Login
        </Button>
      </Form>
     
      {errorElement}
      <p>
        New to AmaderSchool ? 
        <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>
           Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;