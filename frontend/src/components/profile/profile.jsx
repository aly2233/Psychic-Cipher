import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import PostIndexContainer from "../posts/post_index_container"


const Profile = ({user, userId, fetchUser}) => {

  

  useEffect( () => {
    fetchUser(userId)
  },[])

  const [journalPosts, setJournalPosts] = useState(true)

  const toggleJournal = () => journalPosts ? setJournalPosts(false) : setJournalPosts(true)

  return (
    <div>
      <div className='profile-info'>
        <h1>{user?.data.handle}</h1>
        <p>{user?.data.email}</p>
      </div>
      <button onClick={toggleJournal}>{journalPosts ? `Show Card Page Posts` : `Show Journal Posts`}</button>
      <div className="journal-entries">
        <h2>{journalPosts ? 'Journal Entries' : 'Posts On Card Pages'}</h2>
        <PostIndexContainer journalPosts={journalPosts} limit={10} />
      </div>
    </div>

  );
}


const mSTP = (state) => {
  return {
    userId: state.session.user?.id,
    user: state.users ? state.users[state.session.user?.id] : null
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(Profile);