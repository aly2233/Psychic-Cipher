import React, { useState } from "react"
// import { Link } from "react-router-dom"

const PostForm = ({submitForm, post, formType, userId, cardId, togglePostWindow, setChangeCounter}) => {
    const [text, setText] = useState(post ? post.body : '')
    // const originalText = text;
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let postObj = {userId: userId, cardId: cardId, body:text}
        if(post)  postObj['id'] = post._id;
        submitForm(postObj)
        togglePostWindow();
        setChangeCounter(1);
    }

    const update = (e) => {
        setText(e.target.value)
    }
 

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="post-form">
            <p>{formType === 'Create Post' ? <p className="say-about-cards"> 'What would you like to say?' </p> : formType}</p>
            <textarea
                cols="80" 
                rows="100"
                value={text}
                onChange={update}
                className="post-text-box"
            />

            <div className="post-form-buttons" >
                {/* <Link to="/posts" className="post-form-button" >Cancel</Link> */}
                <button className="post-form-button">Submit</button>
                <button type='button' onClick={togglePostWindow} className="post-form-button">Cancel</button>
            </div>
        </form>
    )
}

export default PostForm