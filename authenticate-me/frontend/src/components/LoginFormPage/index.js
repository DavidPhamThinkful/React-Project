import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css';
import Footer from "../Footer";


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoUser = async (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Demo-user', password: 'pasword'}))
  }

  return (

  <div className='form-container'>
   <div className='form-wrapper'>
    <h1 className='login-header'>Koura</h1>
    <form className='login-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='username-label'>
        <h4 className='user-label' >Username or Email</h4>
        <input
          type="text"
          placeholder='Username'
          id='username'
          value={credential}
          className='userInput'
          onChange={(e) => setCredential(e.target.value)}
         
        />
      </label>
      <label className='password-label'>
        Password
        <input
          type="password"
          placeholder='Password'
          className='passInput'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
      </label>
      <button className='login-button' type="submit">Log In</button>
      <button className='demo-button' onClick={demoUser}>Demo User</button>
    </form>
    <p>If you are not a member sign up here!</p><Link className='direct-signup' to='signup'>Sign up here!</Link>
    <Footer />
  </div>
</div>
  );
}

export default LoginFormPage;
