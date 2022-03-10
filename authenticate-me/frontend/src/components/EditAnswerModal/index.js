import React from "react";
import { useState } from "react";
import {Modal} from '../../context/Modal';
import EditAnswer from "../EditAnswer";


function QuestionModal () {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="newquestion-button" onClick={() => setShowModal(true)}>Ask a question here!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAnswer setShowModal={setShowModal} />    
                </Modal>
            )}
        </>
    )
}

export default QuestionModal;
