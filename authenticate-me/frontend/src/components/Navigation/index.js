import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import QuestionModal from '../QuestionModal';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [setShowModal] = useState(false);

  const modalClose = () => setShowModal(false)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='header-container'>
      <ul className='header'>
        <NavLink to='/' className='home-button'>Home</NavLink>
        <QuestionModal modalClose={modalClose} />
      <ProfileButton user={sessionUser} />
      </ul>
      </div>
    );
  return (
    <ul>
      {sessionLinks}
    </ul>
  )
} else {
  return <div style={{display: 'none'}}>
  </div>
}
}

export default Navigation;
