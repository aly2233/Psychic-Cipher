import React, {useEffect} from 'react'
import PostIndexItemContainer from './post_index_item_container';
import postStyles from './posts.css'
import {Link} from 'react-router-dom'

const PostIndex = ({card = {id: '624c87b71b90dbf9947ba2fe'}, posts, fetchPosts}) => {

    //test//
    card = {id: '624c87b71b90dbf9947ba2fe'}
    //////

    useEffect( () => {
        fetchPosts('624c87b71b90dbf9947ba2fe');
    },[])


    // if(!posts) {
    //     return <></>
    // }

    return(
        <ul className='posts-list'>
            {posts?.map( post => {
                return <PostIndexItemContainer key={post.id} post={post}/>
            })}
            <Link to="/posts/new" className='link-button'>Create New Post</Link>
        </ul>
    )
}

export default PostIndex;


