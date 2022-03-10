import React from "react";
import { useState } from "react";
import {Modal} from '../../context/Modal';
import CreateQuestion from '../CreateQuestion';
import '../Navigation/Navigation.css';

function QuestionModal () {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="newquestion-button" onClick={() => setShowModal(true)}>Ask a question</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateQuestion setShowModal={setShowModal} />    
                </Modal>
            )}
        </>
    )
}

export default QuestionModal;
