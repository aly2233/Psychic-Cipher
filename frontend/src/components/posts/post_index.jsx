import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import './posts.css'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({loggedIn, card, posts, fetchPosts, match, limit, skip}) => {

    const [createPost, setCreatePost] = useState(false)
    // const [postCount, ]
    
    useEffect( () => {
        fetchPosts(match.params.card_id, limit, skip)
    },[])

    
    const toggleCreatePostWindow = () => createPost ? setCreatePost(false) : setCreatePost(true)

    return(
        <div>
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


