import React, {useEffect, useState} from 'react'
import PostFrontpageItemContainer from './post_frontpage_item_container';
import './post_frontpage.css'
import left from './halfleft0.jpg'
import right from './halfright0.jpg'



const PostFrontpage = ({loggedIn, card, posts, fetchPosts, match, limit, skip}) => {

   
    // const [postCount, ]
    
    useEffect( () => {
        fetchPosts(match.params.card_id, limit, skip)
    },[])

    

    return(
        <div className='posts-frontpage-container'>
            
            <div className='most-recent-posts'>The Most recent posts</div>

            <div className='front-post-image'>
            {/* <img className='image-front-posts' src={left} alt="" /> */}
            <ul className='posts-list-front'>
                {posts?.map( post => <PostFrontpageItemContainer key={post.id} post={post}/> )}
            </ul>
            {/* <img className='image-front-posts' src={right} alt="" /> */}
            </div>
                {/* </div> */}
                {/* <div className='post-list-front-interior'> */}

        </div>
    )
}

export default PostFrontpage;


