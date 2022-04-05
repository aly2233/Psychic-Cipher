import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import './nav-bar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar'>
              <h1>Psychic Cipher</h1>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='nav-bar'>
              <Link className='header-link' to='/' >
               <div className='title-link'>Psychic Cipher</div>
              </Link>
                {/* <Link className='nav-links-signup' to={'/signup'}>Signup</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='nav-links-login' to={'/login'}>Login</Link> */}
                <button onClick={() => this.props.openModal('signup')}> Signup</button>

                <button onClick={() => this.props.openModal('login')}> Login</button>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;