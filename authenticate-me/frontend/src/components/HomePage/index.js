import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllQuestions } from "../../store/question";
import './HomePage.css';
import * as sessionsActions from '../../store/session';
import HomePageModal from '../HomePageModal';

const HomePage = () => {
    const question = useSelector(state => state.question.entries)
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sessionsActions.restoreUser());
        dispatch(sessionsActions.getAllUsers());
        dispatch(getAllQuestions());
        
    }, [dispatch])

    return (
        <div className="question-container">
            <NavLink className='question-title' keys={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
            <p className="username">Asked by {question?.User?.username}</p>
            <p className="question-description">{question?.description}</p>   
        </div>
    )
   
}
export default HomePage;
