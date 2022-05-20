import React, { useEffect } from 'react';
import './card_show.css'
import { Link } from 'react-router-dom';
import PostIndexContainer from '../../posts/post_index_container';
const CardShow = ({fetchCard, card, match,fetchUser, currentUserId, currentUser, updateUser}) => {
    
    useEffect( () => {
        fetchCard(match.params.card_id);
        fetchUser(currentUserId)
    }, [])

    if(!card) {
        return <></>
    }

    const handleFavorite = () => {
        // debugger
        let favCard = currentUser.favorite_cards.indexOf(card.data._id)
        if(favCard === -1 && currentUser.favorite_cards.length < 6) {
            currentUser.favorite_cards.push(card.data._id)
            updateUser(currentUser)
        } else {
            currentUser.favorite_cards = currentUser.favorite_cards.slice(0, favCard).concat(currentUser.favorite_cards.slice(favCard + 1))
            updateUser(currentUser)
        }
    }

    const checkFavorites = () => {
        if(currentUser) {
            if(currentUser.favorite_cards.includes(card.data._id)) {
                return  <button onClick={handleFavorite} className='favorite-post-button'> Unfavorite</button>
            } else if(currentUser.favorite_cards.length > 4) {
                return <button className='favorite-post-button'> Maximum favorites achieved</button>
            }
            return <button onClick={handleFavorite} className='favorite-post-button'> Favorite</button>
        } else {
            return <button className='favorite-post-button'> Login to Favorite</button>
        }
    }
    return (
        <div className='card-show-container'>
            <div className='card-show-flex' >
                <div>
                <img className='card-image-show' src={card.data.photoUrls.up} />
                            <div className='card-meaning' >
                                <p className='meaning-title' >Upright Meaning</p>
                                <p>{card.data.meaning.up}</p>
                            </div>
                </div>


                <div className='card-details'>
                        <div className='card-name'>{card.data.name}</div>
                    <p className='card-arcana'> Arcana: {card.data.arcana} </p>
                    <p className='card-desc'>{card.data.desc}</p>
                    {checkFavorites()}
                </div>



                <div>
                <img className='card-image-show' src={card.data.photoUrls.rev} />
                <div className='card-meaning' >
                                <p className='meaning-title' >Reversed Meaning</p>
                                <p>{card.data.meaning.rev}</p>
                            </div>
                </div>




            </div>

          {/* {checkFavorites()} */}
            {/* <button onClick={handleFavorite} className='create-post-button'> Favorite</button> */}
            <div className='card-comments'>
                <PostIndexContainer card={card} />
            </div>


    

        </div>
        )
    }



export default CardShow;