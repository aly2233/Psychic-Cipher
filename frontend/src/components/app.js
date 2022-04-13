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
import ReadingContainer from "./cards/reading_container"
// import EditPostFormContainer from './posts/post_form/edit_post_container';

import Profile from "./profile/profile";
import EditProfileContainer from './profile/edit_profile_container';
import searchbar_container from './cards/searchbar/searchbar_container';


const App = () => (
  <div>
    <NavBarContainer />
    < Modal />
    {/* <Routes> */}
        <Route exact path="/" component={MainPage} />
        <Route exaxt path="/posts" component={PostIndexContainer} />
        <Route exact path="/posts/new" component={CreatePostFormContainer}/>
        {/* <Route exact path="/posts/:post_id/edit" component={EditPostFormContainer} /> */}
        {/* <Route exact path="/login" component={LoginFormContainer} /> */}
        {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
        {/* <Route exact path="/cards" component={searchbar_container} /> */}
        <Route exact path="/cards" component={cardsContainer} />
        <Route exact path="/cards/:card_id" component={CardShowContainer} />
        <Route exact path="/reading"component={ReadingContainer}/>
        <Route exact path="/profile/edit" component={EditProfileContainer }/>
        <Route exact path="/profile" component={Profile}/>
    {/* </Routes> */}

  </div>
);

export default App;