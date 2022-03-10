import React, { useState } from "react";
import {Modal} from '../../context/Modal';
import './AddAnswerModal.css'
import CreateAnswer from '../CreateAnswer';

function AddAnswerModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button className="answer-button" onClick={() => setShowModal(true)}>Answer here!</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CreateAnswer setShowModal={setShowModal} />
                </Modal>
        )}
        </>
    )
}

export default AddAnswerModal;
