import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import "./profile.css";

const Profile = () => {
  return (
    <div id="profile-container">
      <div id="authored-posts">
        <h1>Tarot Notes</h1>
        <PostIndexContainer />        
      </div>

        <div id="friends-container">
          <h1>Keep in touch with your friends!</h1>
          <div id="friend-boundaries">
            <div id="friend-box-top" className="friend">
              <div className="friend-heading">
                <h2>David Domingo</h2>
              </div>
              <div className="friend-link">
              <a href="https://github.com/Domingo-creator">Domingo-creator</a>
              </div>
            </div>

          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Zach Werbalowsky</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/ZWerbo">ZWerbo</a>
            </div>
          </div>
          
          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Alan Yueh</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/aly2233">aly2233</a>          
            </div>
          </div>

          <div id="space-between-friend" className="friend">
            <div className="friend-heading">
              <h2>Abigail Montemayor</h2>
            </div>
            <div className="friend-link">
              <a href="https://github.com/ee3y0re">ee3y0re</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Profile;