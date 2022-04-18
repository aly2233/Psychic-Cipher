import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import './nav-bar.css'

class NavBar extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout()
      this.props.history.push("/");
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar'>
                <div className='flourish-block0'></div>
              <div className='flourish-block'></div>
              <div className='flourish-block2'></div>
              <div className='flourish-block3'></div>
              <div className='flourish-block4'></div>
              <div className='flourish-block00'></div>
             <Link className='header-link' to='/' >
               <div className='title-link'>Psychic Cipher</div>
              </Link>

              <div className='nav-bar-button-container'>
                <Link to={'/profile'}>
                  <button className='nav-bar-button'>Profile</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'/cards'}>
                  <button className='nav-bar-button'>Explore</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='nav-bar-button' onClick={this.logoutUser}>Logout</button>
                </div>
            </div>
        );
      } else {
        return (
          <div className='nav-bar'>
              <div className='flourish-block0'></div>
              <div className='flourish-block'></div>
              <div className='flourish-block2'></div>
              <div className='flourish-block3'></div>
              <div className='flourish-block4'></div>
              <div className='flourish-block00'></div>
              <Link className='header-link' to='/' >
               <div className='title-link'>Psychic Cipher</div>
              </Link>
                {/* <Link className='nav-links-signup' to={'/signup'}>Signup</Link>
                <Link className='nav-links-login' to={'/login'}>Login</Link> */}
                <div className='nav-bar-button-container'>
                <button className='nav-bar-button' onClick={() => this.props.openModal('signup')}> Signup</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'/cards'}>
                  <button className='nav-bar-button'>Explore</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='nav-bar-button' onClick={() => this.props.openModal('login')}> Login</button>


                </div>

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