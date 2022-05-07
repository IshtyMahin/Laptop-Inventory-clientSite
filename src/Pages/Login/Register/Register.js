import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from "../../../firebase.init";
import SocialLogin from "../ScocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    
    if(loading ){
      return <Loading></Loading>
  }
    if(user){
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }

  return (
    <div className="register-form">
      <h2 style={{textAlign: 'center'}}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input type="submit" value="Register" />
      </form>
      <p className="text-danger">{error?.message}</p>
      <p>
        Already have an account ? 
        <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>
           Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;