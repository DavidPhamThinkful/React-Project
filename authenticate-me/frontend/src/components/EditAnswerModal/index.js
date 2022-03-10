import React from "react";
import { useState } from "react";
import {Modal} from '../../context/Modal';
import EditAnswer from "../EditAnswer";


function EditAnswerModal () {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="edit-button" onClick={() => setShowModal(true)}>Edit your answer</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAnswer setShowModal={setShowModal} />    
                </Modal>
            )}
        </>
    )
}

export default EditAnswerModal;
