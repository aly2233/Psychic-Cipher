import React, {useEffect, useState} from 'react'
import EditPostFormContainer from './post_form/edit_post_form_container'

const PostIndexItem = ({post, user, deletePost}) => {

    const [editPost, setEditPost] = useState(false)

    const toggleEditPostWindow = () => {
        editPost ? setEditPost(false) : setEditPost(true)
    }

    const handleDelete = () => {
        deletePost(post._id);
        toggleEditPostWindow();
    }

    return (
        <li>
            <div className='post-header'>
                <p>{user.email}</p>
                <p>{post.date}</p>
            </div>
            <div>
                <p>{post.body}</p>
            </div>

            {post.userId === user.id ? <button onClick={toggleEditPostWindow}>Edit Post</button> : <></>}
            {editPost ? <EditPostFormContainer post={post} cardId={post.cardId} togglePostWindow={toggleEditPostWindow}/> : <></>}
            {editPost ? <button onClick={handleDelete}>Delete Post</button> : <></>}
        </li>
    )
}

export default PostIndexItem