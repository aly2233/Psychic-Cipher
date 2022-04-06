import React, { useEffect } from 'react';
import PostIndexContainer from '../../posts/post_index_container';
const CardShow = ({fetchCard, card, match}) => {
    useEffect( () => {
        debugger  // 
        fetchCard(match.params.card_id);
    }, [])

    return (
        <div>
            {/* <h1>{card.name}</h1> */}
            {/* <h2>{card.arcana}</h2> */}

            <div className='card-comments'>
                {/* <PostIndexContainer card={card} /> */}
            </div>
        </div>
    )
}

export default CardShow;