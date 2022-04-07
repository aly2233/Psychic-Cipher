import React, {useEffect, useState} from 'react'
import EditPostFormContainer from './post_form/edit_post_form_container'

const PostIndexItem = ({post, user, deletePost, setChangeCounter}) => {

    const [editPost, setEditPost] = useState(false)

    const toggleEditPostWindow = () => {
        editPost ? setEditPost(false) : setEditPost(true)
    }

    const handleDelete = () => {
        deletePost(post._id);
        toggleEditPostWindow();
        setChangeCounter(1);
    }

    const convertDate = () => {
        let dateString = new Date(post.date).toString()
        return dateString.slice(0, dateString.indexOf(':') - 2)
    }

    return (
        <li>
            <div className='post-header'>
                <p className='user-email-tag'>{user.email}</p>
                <p className='date-tag'>{convertDate()}</p>
                {/* <p> {post.date}</p> */}
            </div>
            <div className='post-body'>
                <p className='post-body-text'>{post.body}</p>
            </div>

            {post.userId === user.id ? <button onClick={toggleEditPostWindow} className='edit-post-form-button'>Edit Post</button> : <></>}
            {editPost ? <EditPostFormContainer post={post} cardId={post.cardId} togglePostWindow={toggleEditPostWindow}/> : <></>}
            {editPost ? <button onClick={handleDelete} className='post-form-button'>Delete Post</button> : <></>}
        </li>
    )
}

export default PostIndexItem