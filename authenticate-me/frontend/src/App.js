import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from "./components/SplashPage";
import SplashPicture from "./components/SplashPicture";
import HomePage from './components/HomePage';
import Navigation from "./components/Navigation";
import UpdateQuestion  from "./components/UpdateQuestion";
import QuestionDetail from "./components/QuestionDetail";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.getUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
            <HomePage />
            
          </Route>
          <Route path="/signup">
            <SplashPicture />
            <SignupFormPage />
          </Route>
          <Route exact path='/questions/:id'>
            <QuestionDetail />
            </Route>
          <Route path='/questions/:id/edit'>
            <UpdateQuestion />
            </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
