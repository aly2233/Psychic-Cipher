import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import postStyles from './posts.css'
import {Link, Route} from 'react-router-dom'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({loggedIn, card, posts, fetchPosts, match}) => {

    const [createPost, setCreatePost] = useState(false)
    
    useEffect( () => {
        fetchPosts(match.params.card_id)
    },[])

    const toggleCreatePostWindow = () => {
        createPost ? setCreatePost(false) : setCreatePost(true)
    }

    debugger
    return(
        <div>
                {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow}/> : <></>}
                <button onClick={toggleCreatePostWindow} className='create-post-button'>Create New Post</button>
            <ul className='posts-list'>
                {posts?.map( post => <PostIndexItemContainer key={post.id} post={post}/> )}
            </ul>
            {loggedIn ? 
                <button onClick={toggleCreatePostWindow} className='link-button'>Create New Post</button> : <></>}
                {/* <Link to="../../login" className='link-button'>Log In To Post</Link> */}
            {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow}/> : <></>}
        </div>
    )
}

export default PostIndex;


