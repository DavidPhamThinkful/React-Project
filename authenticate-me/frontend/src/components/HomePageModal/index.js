import React, { useState } from "react";
//import { useSelector} from "react-redux";
import CreateQuestion from '../CreateQuestion';
import { Modal } from "../../context/Modal";
import './HomePageModal.css';

function HomePageModal() {
    //const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <h1 className="home-page-modal">Here are all the questions!</h1>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateQuestion setShowModal={setShowModal} />
                    </Modal>
            )}
        
        
        </>
    )
}

export default HomePageModal;
