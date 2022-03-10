import React, { useState } from "react";
import { useSelector} from "react-redux";
import CreateQuestion from '../CreateQuestion';
import { Modal } from "../../context/Modal";
import './HomePageModal.css';

function HomePageModal() {
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="home-page-modal" onClick={() => setShowModal(true)}>{`${sessionUser?.username}, Want to ask a question? Click here!`}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateQuestion setShowModal={setShowModal} />
                    </Modal>
            )}
        
        
        </>
    )
}

export default HomePageModal;
