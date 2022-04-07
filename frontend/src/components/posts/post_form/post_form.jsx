import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PostForm = ({submitForm, post, formType, userId, cardId, togglePostWindow}) => {
    const [text, setText] = useState(post ? post.body : '')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let postObj = {userId: userId, cardId: cardId, body:text}
        if(post)  postObj['id'] = post._id;
        submitForm(postObj)
        togglePostWindow();
    }

    const update = (e) => {
        setText(e.target.value)
    }
 
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="post-form">
            <p>{formType === 'Create Post' ? 'What would you like to say about your card?' : formType}</p>
            <textarea
                value={text}
                onChange={update}
            />
            <div className="post-form-buttons" >
                <Link to="/posts" className="post-form-button" >Cancel</Link>
                <button className="post-form-button">Submit</button>
            </div>
        </form>
    )
}

export default PostForm