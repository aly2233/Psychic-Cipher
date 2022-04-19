import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './nav/modal';
import cardsContainer from './cards/cards_container';
import MainPageContainer from './main/main_page_container';
import PostIndexContainer from './posts/post_index_container';
import CreatePostFormContainer from './posts/post_form/create_post_container';
import CardShowContainer from './cards/card/card_show_container';
import ReadingContainer from "./cards/reading_container"
import ProfileContainer from "./profile/profile_contaier";
import EditProfileContainer from './profile/edit_profile_container';
import AboutFooter from './about_footer/about_footer';



const App = () => (
  <div>
    <NavBarContainer />
    < Modal />
    {/* <Routes> */}
        <Route exact path="/" component={MainPageContainer} />
        <Route exaxt path="/posts" component={PostIndexContainer} />
        <Route exact path="/posts/new" component={CreatePostFormContainer}/>
        <Route exact path="/cards" component={cardsContainer} />
        <Route exact path="/cards/:card_id" component={CardShowContainer} />
        <Route exact path="/reading"component={ReadingContainer}/>
        <Route exact path="/profile/edit" component={EditProfileContainer }/>
        <Route exact path="/profile" component={ProfileContainer}/>
    {/* </Routes> */}
    <AboutFooter />
  </div>
);

export default App;