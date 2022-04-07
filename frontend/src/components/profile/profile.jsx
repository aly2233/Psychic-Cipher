import React from "react";
import { connect } from "react-redux";
import PostIndexContainer from "../posts/post_index_container"

const Profile = ({props}) => {
  console.log( props );
  return (
    <div>
      <PostIndexContainer />
    </div>
  );
}

const mSTP = (state) => {
  return {
    props: state.session.user
  }
}

export default connect(mSTP)(Profile);