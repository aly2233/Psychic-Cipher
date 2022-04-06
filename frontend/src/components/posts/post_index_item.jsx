import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import postStyles from './posts.css'


const PostIndexItem = ({post, user, fetchPost, match}) => {
    // useEffect( () => {
    //     fetchPost(match.params.post_id)
    // }, [])

    return (
        <li>
            <div className='post-header'>
                <p>{post.user}</p>
                <p>{post.date}</p>
            </div>
            <div>
                <p>{post.body}</p>
            </div>
            {/* {post.user === userId ? <Link to={`/posts/${post.id}/edit`}>Edit Post</Link> : <></>} */}
        </li>
    )
}

export default PostIndexItem