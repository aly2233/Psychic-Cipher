import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import './posts.css'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({loggedIn, card, posts, fetchPosts, fetchAuthor, authors, match, userId, limit, skip}) => {

    const [createPost, setCreatePost] = useState(false)
    const [changeCounter, setChangeCounter] = useState(0)
    


    useEffect( () => {
        fetchPosts(card ? 'cardId' : 'userId' , match.params.card_id || userId, limit, skip)
            .then( posts => {posts.posts.data.forEach( post => fetchAuthor(post.userId))})
    },[changeCounter])

    
    const toggleCreatePostWindow = () => createPost ? setCreatePost(false) : setCreatePost(true)

    return(
        <div>
            {createPost ? <CreatePostFormContainer cardId={card.data._id} togglePostWindow={toggleCreatePostWindow} setChangeCounter={setChangeCounter}/> : <></>}

            {userId  && !createPost && card ? 
                <button onClick={toggleCreatePostWindow} className='create-post-button'>Create New Post</button> : <></>}
            <ul className='posts-list'>
                {posts?.map( (post, index) => <PostIndexItemContainer key={post.id} author={authors[post.userId]} card={card} post={post} setChangeCounter={setChangeCounter}/> )}
            </ul>
        </div>
    )
}

export default PostIndex;


