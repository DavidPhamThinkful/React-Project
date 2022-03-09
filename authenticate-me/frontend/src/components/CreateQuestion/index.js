import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from '../../store/question';
import './CreateQuestion.css'

const AddQuestion = ({setShowModal}) => {
const history = useHistory()
const dispatch = useDispatch();
const sessionUser = useSelector((state) => state.session.user)
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [errors, setErrors] = useState([]);


useEffect(() => {
    const errors = [];
    if (title.length === 0) {
        errors.push('Must Provide a Title!')
    }

    if (description.length === 0) {
        errors.push('Provide a Description!')
    }

    setErrors(errors);
    }, [title, description])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id;
        const newQuestion = {
            ownerId: userId,
            title,
            description
        }
    const question = await dispatch(questionActions.createQuestion(newQuestion))
    setShowModal(false);
    history.push(`/questions/${question.id}`)
    }

return(
    <div className="add-question">
        <div className="form-container">
            <form className="question-form" onSubmit={handleSubmit}>
             <h1>Ask a Question!</h1>
             <ul>
                 {errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>)}
             </ul>
             <label className="title-label">
                 <input
                 type='text'
                 value={title}
                 placeholder='Title'
                 onChange={(e) => setTitle(e.target.value)}
                 required />
                 </label>
             <label className="description-label">
                 <textarea
                 value={description}
                 placeholder='Description'
                 onChange={(e) => setDescription(e.target.value)}
                 required />
                 </label>
                <button className="submit-button" type="submit" disabled={errors.length === 0 ? false : true}>Submit Question!</button>
                </form>    
        </div>    
    </div>
    )
}

export default AddQuestion;
