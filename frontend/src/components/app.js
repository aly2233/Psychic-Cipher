import React from 'react';
// import { Route, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './nav/modal';
import cardsContainer from './cards/cards_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import CreatePostFormContainer from './posts/post_form/create_post_container';
import CardShowContainer from './cards/card/card_show_container';
// import EditPostFormContainer from './posts/post_form/edit_post_container';

import ReadingContainer from "./cards/reading_container"


const App = () => (
  <div>
    <ReadingContainer />
    <NavBarContainer />
    < Modal />
    {/* <Routes> */}
        <Route exact path="/" component={MainPage} />
        <Route exaxt path="/posts" component={PostIndexContainer} />
        {/* <Route exact path="/posts/new" component={CreatePostFormContainer}/> */}
        {/* <Route exact path="/posts/:post_id/edit" component={EditPostFormContainer} /> */}
        {/* <Route exact path="/login" component={LoginFormContainer} /> */}
        {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
        <Route exact path="/cards" component={cardsContainer} />
        <Route exact path="/cards/:card_id" component={CardShowContainer} />
    {/* </Routes> */}

  </div>
);

export default App;