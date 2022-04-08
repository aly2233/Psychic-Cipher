import React, {useEffect, useState} from 'react'


const PostFrontpageItem = ({post, author}) => {

    const convertDate = () => {
        let dateString = new Date(post.date).toString()
        return dateString.slice(0, dateString.indexOf(':') - 2)
    }
    
    return (
        <li>
            <div className='post-header'>
                <p className='user-email-tag'>{author?.data?.handle}</p>
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