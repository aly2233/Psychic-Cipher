import React from 'react';
// import { Route, ProtectedRoute } from '../util/route_util';
import { Route, Routes } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    {/* <Routes> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
    {/* </Routes> */}

  </div>
);

export default App;