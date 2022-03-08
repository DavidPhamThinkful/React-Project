import React, { useState } from "react";
import { useSelector} from "react-redux";
import CreateQuestion from '../CreateQuestion';
import { Modal } from "../../context/Modal";
import './HomePageModal.css';

function HomePageModal() {
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState();

    return (
        <>
            <button className="homepage-modal" onClick={() => setShowModal(true)}>{`${sessionUser?.username}, Time to ask a question!`}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateQuestion setShowModal={setShowModal} />
                    </Modal>
            )}
        
        
        </>
    )
}

export default HomePageModal;
