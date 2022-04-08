import React, {useEffect, useState} from 'react'
// import PostFrontpageItemContainer from './post_frontpage_item_container';
import PostFrontpageItem from './post_frontpage_item';
import './post_frontpage.css'
import left from './Lhalf.jpg'
import right from './Rhalf.jpg'



const PostFrontpage = ({posts, fetchPosts, fetchAuthor, authors, limit, skip}) => {
 
    useEffect( () => {
        fetchPosts(limit, skip)
            .then( posts => {posts?.posts?.data.forEach( post => fetchAuthor(post.userId))})
    },[])

    return(
        <div className='posts-frontpage-container'>
            
            <div className='most-recent-posts'>The Most recent posts</div>

            <div className='front-post-image'>
            <img className='image-front-posts' src={right} alt="" />
            <ul className='posts-list-front'>
                {posts?.map( post => <PostFrontpageItem key={post.id} author={authors[post.userId]} post={post}/> )}
            </ul>
            <img className='image-front-posts' src={left} alt="" />
            </div>
                {/* </div> */}
                {/* <div className='post-list-front-interior'> */}

        </div>
    )
}

export default PostFrontpage;


