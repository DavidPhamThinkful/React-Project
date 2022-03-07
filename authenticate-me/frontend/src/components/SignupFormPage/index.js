import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(sessionActions.getAllUsers());
  }, [dispatch])

  useEffect(()=> {
    const errors = [];
    if (username.length === 0) {
      errors.push('Username field is required!');
    }
    if (username.length > 60) {
      errors.push('Username must be 60 characters or less!');
    }
    if(email.length === 0){
      errors.push('Email field is required!')
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      errors.push('Must type a password!')
    }
    setErrors(errors);
  }, [username, email, password, confirmPassword])

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
  <div className="signup-container">
    <div className="signup-wrap">
      <h1 className="login-head">Koura</h1>
    <form className="signup-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className="email-label">
        Email
        <input
        className="email-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="user-label">
        Username
        <input
          className="text-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className="password-label">
        Password
        <input
          className="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="confirmedPassword-label">
        Confirm Password
        <input
          className="password-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button className="signup-button" type="submit" disabled={errors.length === 0 ? false : true}>Sign Up</button>
    </form>
    </div>
  </div>
  );
}

export default SignupFormPage;
