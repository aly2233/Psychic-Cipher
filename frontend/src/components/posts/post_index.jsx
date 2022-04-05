import React, {useEffect} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import postStyles from './posts.css'
import {Link} from 'react-router-dom'

const PostIndex = ({posts, fetchPosts}) => {
    useEffect( () => {
        fetchPosts();
    },[])

    /////// test //////
    posts = [
        {id: 0, user: 'User' , body:'This is text', date:'3/04/22'},
        {id: 1, user:'User', body:'This is also text', date:'3/05/22'},
        {id: 2, user:'User', body:'This is text part 3', date: '3/06/22'},
    ]

    if(!posts) {
        return <></>
    }

    return(
        <ul className='posts-list'>
            {posts.map( post => {
                return <PostIndexItemContainer key={post.id} post={post}/>
            })}
            <Link to="/posts/new" className='link-button'>Create New Post</Link>
        </ul>
    )
}

export default PostIndex;


