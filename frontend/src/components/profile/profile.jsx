import React from "react";
import { connect } from "react-redux";
import PostIndexContainer from "../posts/post_index_container"

const Profile = ({props}) => {
  console.log( props );
  return (
    <div id="profile-container">
      <div>
        <h1>Tarot Notes</h1>
        <PostIndexContainer />        
      </div>

      <div>
        <h1>Friends</h1>
        <h2>David Domingo</h2>
        <a href="https://github.com/Domingo-creator">Github</a>
        <h2>Abigail Montemayor</h2>
        <a href="https://github.com/ee3y0re">Github</a>
        <h2>Zach Werbalowsky</h2>
        <a href="https://github.com/ZWerbo">Github</a>
        <h2>Alan Yueh</h2>
        <a href="https://github.com/aly2233">Github</a>
      </div>
      
    </div>
  );
}

const mSTP = (state) => {
  return {
    props: state.session.user
  }
}

export default connect(mSTP)(Profile);