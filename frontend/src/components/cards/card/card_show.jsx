import React, { useEffect } from 'react';
import './card_show.css'
import { Link } from 'react-router-dom';
import PostIndexContainer from '../../posts/post_index_container';
const CardShow = ({fetchCard, card, match}) => {
    useEffect( () => {
        fetchCard(match.params.card_id);
    }, [])

    if(!card) {
        return <></>
    }
    return (
        <div className='card-show-container'>

            <div className='card-show-flex' >
                <img className='card-image-show' src={card.data.photoUrls.up} />
                <div className='card-details'>
            <div className='card-name'>{card.data.name}</div>
            <p className='card-arcana'> Arcana: {card.data.arcana} </p>

            <p className='card-desc'>{card.data.desc}</p>

                </div>

                <img className='card-image-show' src={card.data.photoUrls.rev} />
            </div>


            {/* <h1>Card Show</h1> */}
            <Link to="/cards">All Cards</Link>

            <div className='card-comments'>
                <PostIndexContainer card={card} />
            </div>
        </div>
        )
    }



export default CardShow;