import React, {useEffect, useState} from 'react'
import EditPostFormContainer from './post_form/edit_post_form_container'

const PostIndexItem = ({post, card, currentUser, author, deletePost, setChangeCounter, updatePost}) => {

    const [editPost, setEditPost] = useState(false)
    const [liked, setLiked] = useState(post.likes?.includes(currentUser.id) ? true : false)
    // const [loading, setLoading] = useState(false)

    // useEffect = ( () => {
    //     debugger
    //     setLoading(false)
    // }, [liked])
   

    // useEffect = (()=> {debugger}, [liked])

    const toggleEditPostWindow = () => {
        editPost ? setEditPost(false) : setEditPost(true)
    }

    const handleDelete = () => {
        deletePost(post._id);
        toggleEditPostWindow();
        setChangeCounter(Math.random() * 100);
    }

    const convertDate = () => {
        let dateString = new Date(post.date).toString()
        return dateString.slice(0, dateString.indexOf(':') - 2)
    }

    const update = () => { 
        if(liked) {
            post.likes = removeLike()
            updatePost(post)
            setLiked(false)
        } else {
            post.likes ? post.likes.push(currentUser.id) : post.likes = []
            updatePost(post)
            setLiked(true)
        }
    }

    const removeLike = () => {
        let newLikes = []
        for(let i = 0; i < post.likes.length; i++) {
            if(currentUser.id !== post.likes[i]) {
                newLikes.push(post.likes[i])
           
            }
        } 
        return newLikes
        
    }




    return (
        <li>
            <div className='post-header'>
                <p className='user-email-tag'>{author?.data.handle}</p>
                
                <p className='date-tag'>{convertDate()}</p>
            </div>
            <div className='post-body'>
                <p className='post-body-text'>{post.body}</p>
            </div>
            <div className='post-buttons'>
                {currentUser ? <div onClick={update} className="edit-post-form-button" ><span>({post.likes?.length})   </span>{liked ? 'Unlike' : 'Like'}</div> : <><span>({post.likes?.length})  </span></> }
                {currentUser && (card || !post.cardId) && post.userId === currentUser.id ? <button onClick={toggleEditPostWindow} className='edit-post-form-button'>Edit Post</button> : <></>}
            </div>

            {editPost ? <EditPostFormContainer post={post} cardId={post.cardId} togglePostWindow={toggleEditPostWindow}/> : <></>}
            {editPost ? <button onClick={handleDelete} className='post-form-button'>Delete Post</button> : <></>}
        </li>
    )
}

export default PostIndexItem