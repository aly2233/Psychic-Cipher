import React from 'react';
import './main_page.css'
import { Link } from 'react-router-dom';
import photo from './tarottopbannerrr.jpg'
import death from './Death.jpeg'
import lovers from './Lovers.jpeg'
import fool from './Fool.jpeg'
import star from './aStar.jpeg'
import justice from './Justice.jpeg'
import hanged from './Hanged_Man.jpeg'
// import PostIndexContainer from '../posts/post_index_container';
import PostFrontpageContainer from '../posts/frontpage/post_frontpage_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {skip: 0}
  }

  update(e) {
    this.setState({skip: e.target.value})
  }

  render() {
    return (
      <div className='main-page'>
        <div className='top-image'>
          <img className='image'  src={photo} />
          <Link to='/reading'>
            <h1 className='play-tarot' >Play the game of Tarot</h1>
          </Link>
        </div>

      <div>
        <h2 className='explore-writing' >Explore some of the most popular cards</h2>
        {/* <div className='border-bottom'>Secret writing</div> */}
            <div className='explore-cards'> 

              <Link to={'/cards/624dc08fb5f9e7a4e4e8c827'}>
                <img className='tarot-card-item' src={fool}/>
              </Link>
              <Link to={'/cards/624dc08fb5f9e7a4e4e8c823'}>
                <img className='tarot-card-item' src={star}/>
              </Link>
              <Link to={'/cards/624dc08fb5f9e7a4e4e8c81d'}>
                <img className='tarot-card-item' src={justice}  />
              </Link>
              <Link to={'/cards/624dc08fb5f9e7a4e4e8c81e'}>
                <img className='tarot-card-item' src={hanged} alt="" />
              </Link>

              <Link to={'/cards/624dc08fb5f9e7a4e4e8c818'}>
                <img className='tarot-card-item' src={lovers} alt="" />
              </Link>

              <Link to={'/cards/624dc08fb5f9e7a4e4e8c81f'}>
                <img className='tarot-card-item' src={death} alt="" />
              </Link>

            </div>
        </div>
        
        <div className='main-page-recent-posts'>
            <PostFrontpageContainer limit={8} skip={this.state.skip} />
        </div>
      </div>
    );
  }
}



export default MainPage;