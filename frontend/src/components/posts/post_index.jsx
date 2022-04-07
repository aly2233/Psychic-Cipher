import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import './posts.css'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({loggedIn, card, posts, fetchPosts, match}) => {

    const [createPost, setCreatePost] = useState(false)
    
    useEffect( () => {
        fetchPosts(match.params.card_id)
    },[posts])

    const toggleCreatePostWindow = () => createPost ? setCreatePost(false) : setCreatePost(true)

    return(
        <div className='create-button-container'>
            {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow}/> : <></>}
            {loggedIn  && !createPost ? 
                <button onClick={toggleCreatePostWindow} className='create-post-button'>Create New Post</button> : <></>}
            <ul className='posts-list'>
                {posts?.map( post => <PostIndexItemContainer key={post.id} post={post}/> )}
            </ul>
        </div>
    )
}

export default PostIndex;


