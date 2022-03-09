import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SplashPage.css'
import LoginFormPage from "../LoginFormPage";
import SplashPicture from "../SplashPicture";


function SplashPage() {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) {
        return <Redirect to='/' />
    } else {
        return (
            <div className="splash-container">
                <SplashPicture />
                <LoginFormPage />
            </div>
        )
    }
}

export default SplashPage;
