import React, { useEffect } from 'react';

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
        <div>
            <h1>Card Show</h1>
            <Link to="/cards">All Cards</Link>
            <h1>{card.name}</h1>
            <h2>{card.arcana}</h2>

            <div className='card-comments'>
            <PostIndexContainer card={card} />

            </div>
        )
    }
}

export default CardShow;