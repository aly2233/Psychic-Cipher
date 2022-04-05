import React from 'react';
import './main_page.css'
import photo from './tarottopbannerrr.jpg'

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page'>
        <div className='top-image'>

          <img className='image'  src={photo} />
          <h1 className='play-tarot' >Play the game of Tarot</h1>
         

        </div>

      <div>
        <h2 className='explore-writing' >Explore some of the most popular cards</h2>
            <div className='explore-cards'> 

              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />
              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />
              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />
              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />
              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />
              <img className='tarot-card-item' src="https://m.media-amazon.com/images/I/81E1qB4xXdS._AC_SL1500_.jpg" alt="" />

            </div>
        </div>
      </div>
    );
  }
}



export default MainPage;