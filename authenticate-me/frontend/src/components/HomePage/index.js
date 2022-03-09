import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllQuestions } from "../../store/question";
import './HomePage.css';
import * as sessionActions from '../../store/session';
import HomePageModal from '../HomePageModal';

const HomePage = () => {
    const dispatch = useDispatch();
    const question = useSelector(state => state.question.entries)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllQuestions());
        dispatch(sessionActions.restore());
        dispatch(sessionActions.getAllUsers());
        
    }, [dispatch])

    if(sessionUser) {
    return (
    <div className="article-container">
        <HomePageModal />
        
        <div className="question-container">
            <NavLink className='question-title' keys={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
            <p className="username">Asked by {question?.User?.username}</p>
            <p className="question-description">{question?.description}</p>   
        </div>
        </div>
    )
    }
}
export default HomePage;
