import React, {useEffect, useState} from 'react'


const PostFrontpageItem = ({post, user, deletePost}) => {

    // const [editPost, setEditPost] = useState(false)

    // const toggleEditPostWindow = () => {
    //     editPost ? setEditPost(false) : setEditPost(true)
    // }

    // const handleDelete = () => {
    //     deletePost(post._id);
    //     toggleEditPostWindow();
    // }

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
        </li>
    )
}

export default PostFrontpageItem