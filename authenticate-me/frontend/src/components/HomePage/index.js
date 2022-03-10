import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions } from "../../store/question";
import * as sessionActions from '../../store/session';
import './HomePage.css'
import HomePageModal from "../HomePageModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.question.entries)
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getAllQuestions())
    dispatch(sessionActions.getAllUsers())
    dispatch(sessionActions.restore());
  }, [dispatch])


  if (sessionUser) {

    return (
      <div className="question-wrapper">
        <h1 className="title">Koura</h1>
        <div className='article-container'>
          <HomePageModal />
          {question && question.map((question) => {
            return (
              <div className="question-container">
                <NavLink className='question-title' key={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
                <p className="the-usersname">Asked by {question?.User?.username}</p>
                <p className='question-description'>{question?.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <div><></></div>
  }
}

export default HomePage;
