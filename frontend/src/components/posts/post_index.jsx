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
            <ul className='posts-list'>
                {posts?.map( post => {
                    return <PostIndexItemContainer key={post.id} card= {card} post={post}/>
                })}
                {/* <Link to={`cards/${card._id}/new`} className='link-button'>Create New Post</Link> */}
            </ul>
            {/* <Route exact path="/posts/new" component={CreatePostFormContainer}/> */}
            <button onClick={toggleCreatePostWindow} className='link-button'>Create New Post</button>
            {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow}/> : <></>}
        </div>
    )
}

export default PostIndex;


