import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import postStyles from './posts.css'
import {Link, Route} from 'react-router-dom'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({card, posts, fetchPosts, match}) => {

    const [createPost, setCreatePost] = useState(false)
    
    useEffect( () => {
        // debugger
        // fetchPosts(card.data._id)
        fetchPosts(match.params.card_id)
    },[])

    const toggleCreatePostWindow = () => {
        createPost ? setCreatePost(false) : setCreatePost(true)
    }
    return(
        <div>
                {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow}/> : <></>}
                <button onClick={toggleCreatePostWindow} className='create-post-button'>Create New Post</button>
            <ul className='posts-list'>
                {posts?.map( post => {
                    return <PostIndexItemContainer key={post.id} post={post}/>
                })}
            </ul>
        </div>
    )
}

export default PostIndex;


