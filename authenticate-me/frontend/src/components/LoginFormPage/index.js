import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
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
   <div className='from-wrap'>
    <h1 className='login-header'>Koura</h1>
    <form className='login-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='username-label'>
        <h4 className='user-label' >Username or Email</h4>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className='password-label'>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className='login-button' type="submit">Log In</button>
      <button className='demo-button' onClick={demoUser}>Demo User</button>
    </form>
  </div>
</div>
  );
}

export default LoginFormPage;
