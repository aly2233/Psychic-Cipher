import React, {useEffect, useState} from 'react'
import PostFrontpageItemContainer from './post_frontpage_item_container';
import './post_frontpage.css'



const PostFrontpage = ({loggedIn, card, posts, fetchPosts, match, limit, skip}) => {

   
    // const [postCount, ]
    
    useEffect( () => {
        fetchPosts(match.params.card_id, limit, skip)
    },[])

    

    return(
        <div className='posts-frontpage-container'>

            <div className='most-recent-posts'>The Most recent posts</div>
            <ul className='posts-list-front'>
                {posts?.map( post => <PostFrontpageItemContainer key={post.id} post={post}/> )}
            </ul>
        </div>
    )
}

export default PostFrontpage;


