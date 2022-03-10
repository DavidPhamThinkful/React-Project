import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as answerActions from '../../store/answer';
import './EditAnswer.css';

const EditAnswer = ({setShowModal, answerId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const questionId = useParams();
    const {id} = questionId;
    const [answer, setAnswer] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
    const errors = [];
    if (answer.length === 0) {
        errors.push('Need a answer!')
    }
    setErrors(errors);
    }, [answer])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editAnswer = {
        id:answerId,
        answer,
        }
    await dispatch(answerActions.updateAnswer(editAnswer))
    setShowModal(false)
    history.push(`/questions/${id}`)
    window.location.reload();
    }

   return (
    <div className='add-question-main'>
        <div className='form-container'>
            <form className='question-form' onSubmit={handleSubmit}>
                <h1>Editing Answer Here!</h1>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className='description-label'>
                <textarea
                value={answer}
                placeholder='Description'
                onChange={(e) => setAnswer(e.target.value)}
                required />
            </label>
            <button className='submit-question' type='submit' disabled={errors.length === 0 ? false : true}>Submit edit</button>
            </form>
        </div>
        </div>
    )
    }

export default EditAnswer;
