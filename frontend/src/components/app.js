import React from 'react';
// import { Route, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './nav/modal';

import MainPage from './main/main_page';


const App = () => (
  <div>
    <NavBarContainer />
    < Modal />
    {/* <Routes> */}
        <Route exact path="/" component={MainPage} />
    {/* </Routes> */}

  </div>
);

export default App;