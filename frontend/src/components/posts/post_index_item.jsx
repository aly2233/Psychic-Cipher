import React, {useEffect} from 'react'
import postStyles from './posts.css'


const PostIndexItem = ({post, fetchPost, match}) => {
    useEffect( () => {
        // fetchPost(match.params.post_id)
    }, [])

    return (
        <li>
            <div className='post-header'>
                <p>{post.user}</p>
                <p>{post.date}</p>
            </div>
            <div>
                <p>{post.body}</p>
            </div>
        </li>
    )
}

export default PostIndexItem