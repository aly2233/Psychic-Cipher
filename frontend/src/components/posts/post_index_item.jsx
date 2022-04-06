import React, {useEffect, useState} from 'react'
import EditPostFormContainer from './post_form/edit_post_form_container'

const PostIndexItem = ({post, user, card}) => {

    const [editPost, setEditPost] = useState(false)

    const toggleEditPostWindow = () => {
        editPost ? setEditPost(false) : setEditPost(true)
    }

    return (
        <li>
            <div className='post-header'>
                <p>{user.userId}</p>
                <p>{post.date}</p>
            </div>
            <div>
                <p>{post.body}</p>
            </div>

            {post.userId === user.id ? <button onClick={toggleEditPostWindow}>Edit Post</button> : <></>}
            {editPost ? <EditPostFormContainer body={body} cardId={card.data._id} toggleEditPostWindow={toggleEditPostWindow}/> : <></>}
        </li>
    )
}

export default PostIndexItem