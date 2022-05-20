import React, {useEffect, useState} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import './posts.css'
import CreatePostFormContainer from './post_form/create_post_container';


const PostIndex = ({card, posts, journalPosts = false, fetchPosts, fetchJournalPosts, fetchAuthor, authors, match, userId, openModal, limit, skip}) => {

    const [createPost, setCreatePost] = useState(false)
    const [changeCounter, setChangeCounter] = useState(0)
    
    useEffect( () => {
        if (journalPosts) {
            fetchJournalPosts(userId, limit, skip)
            .then( posts => {posts.posts.data.forEach( post =>{fetchAuthor(post.userId)})})
        } else {
            fetchPosts(card ? 'cardId' : 'userId' , match.params.card_id || userId, limit, skip)
                .then( posts => {posts.posts.data.forEach( post => fetchAuthor(post.userId))})
        }
    },[changeCounter, journalPosts])

    
    const toggleCreatePostWindow = () => createPost ? setCreatePost(false) : setCreatePost(true)

    return(
        <div>
            {createPost ? <CreatePostFormContainer  cardId={card?.data._id} togglePostWindow={toggleCreatePostWindow} setChangeCounter={setChangeCounter}/> : <></>}

            {userId ? <></> : <button className='create-post-button' onClick={openModal}>Login to Post</button>}
            {userId  && !createPost && (card || (match.path === '/profile' && journalPosts))  ? 
                <button onClick={toggleCreatePostWindow} className='create-post-button'>{journalPosts ? 'Create New Journal Entry' : 'Create New Post'}</button> : <></>}
            <ul className='posts-list'>
                {posts?.map( post => <PostIndexItemContainer key={post._id} author={authors[post.userId]} card={card} post={post} setChangeCounter={setChangeCounter}/> )}
            </ul>
        </div>
    )
}

export default PostIndex;


