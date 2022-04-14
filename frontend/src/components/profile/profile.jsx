import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards } from "../../actions/card_actions";
import { fetchUser } from "../../actions/user_actions";
import PostIndexContainer from "../posts/post_index_container"
import "./profile.css";



const Profile = ({user, userId, fetchUser, fetchCards}) => {

  

  useEffect( () => {
    fetchUser(userId)
    if(localStorage.getItem('searchInput')) {
      localStorage.removeItem('searchInput')
      fetchCards()
    }
  },[])
 

  const [journalPosts, setJournalPosts] = useState(true)

  const toggleJournal = () => journalPosts ? setJournalPosts(false) : setJournalPosts(true)

  return (
    <div id="profile-container">
      <div id="authored-posts">
          <h1>Tarot Notes</h1>
          <div className='profile-info'>
          <h1>{user?.data.handle}</h1>
          <p>{user?.data.email}</p>
          <p>{user?.data?.bio}</p>
          <p>{user?.data?.astrology_sign}</p>
          <Link to="/profile/edit" className='edit-post-button'>Edit Profile</Link>
        </div>
        <div className="journal-entries">
          <h2>{journalPosts ? 'Journal Entries' : 'Posts On Card Pages'}</h2>
          <button onClick={toggleJournal} className="create-post-button">{journalPosts ? `Show Card Page Posts` : `Show Journal Posts`}</button>
          <PostIndexContainer journalPosts={journalPosts} limit={10} />
        </div>      
      </div>

        <div id="friends-container">
          <h1>Keep in touch with your friends!</h1>
          <div id="friend-boundaries">
            <div id="friend-box-top" className="friend">
              <div className="friend-heading">
                <h2>David Domingo</h2>
              </div>
              <div className="friend-link">
              <a href="https://github.com/Domingo-creator" target="_blank">Domingo-creator</a>
              </div>
            </div>

          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Zach Werbalowsky</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/ZWerbo" target="_blank">ZWerbo</a>
            </div>
          </div>
          
          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Alan Yueh</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/aly2233" target="_blank">aly2233</a>          
            </div>
          </div>

          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Abigail Montemayor</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/ee3y0re" target="_blank">ee3y0re</a>
            </div>
          </div>
        </div>
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
