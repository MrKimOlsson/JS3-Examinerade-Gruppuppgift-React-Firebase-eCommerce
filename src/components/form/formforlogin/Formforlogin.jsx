import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../app/action';
import Formbtn from './btnlogin/Formbtn';
import './Formforlogin.scss';
import { useDispatch } from 'react-redux';

const Formforlogin = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  const submitLogin = async (e) => {
    const auth = getAuth();
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(setUser(user));
      console.log('Logged in user:', user);

      handleLogin(); // update isLoggedIn state
      navigate('/');
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className='form-login-wrapper'>
      <div className="form-login-container">
        <Form onSubmit={submitLogin}>
          <h4>Please Login to Your Account</h4>
          <div className="input-group-login d-flex-form">
            <label className='form-label-link' htmlFor="email">E-mail* <Link className='form-link-register-padding' to='/register'>Don't have an Account yet?</Link></label>
            <input type="email" name="email" id="email" className='input-login' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group-login d-flex-form">
            <label htmlFor="password" className='form-label-link-two'>Password* <Link to='/forgotpassword' className='form-link-register-padding'>Forgot your password?</Link></label>
            <input type="password" name="password" id="password" className='input-login' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input className='login-checkbox' type="checkbox" name="" id="" />
          </div>
          <Formbtn />
        </Form>
      </div>
    </div>
  );
};

export default Formforlogin;
