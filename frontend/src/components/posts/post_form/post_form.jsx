import React, { useState } from "react"
// import { Link } from "react-router-dom"

const PostForm = ({submitForm, post, formType, userId, cardId, togglePostWindow, setChangeCounter}) => {
    const [text, setText] = useState(post ? post.body : null)
    const [textErrors, setTextErrors] = useState(null)
    // const originalText = text;
  
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateText()) {
            let postObj = {userId: userId, cardId: cardId, body:text}
            if(post)  postObj['id'] = post._id;
            submitForm(postObj)
                .then( () => {
                    togglePostWindow();
                    setChangeCounter(Math.random() * 10000);
                })
        }
    }

    const validateText = () => {
        if(!text) {
            setTextErrors('! Text cannot be blank')
            return false
        }
        if( text.length < 4) {
            setTextErrors('! Text must be at least 4 characters')
            return false
        }    
        return true;
    }

    const update = (e) => {
        setText(e.target.value)
    }
 

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="post-form">
            <p>{formType === 'Create Post' ? <p className="say-about-cards"> 'What would you like to say?' </p> : formType}</p>
            {textErrors ? <p className='post-errors'>{textErrors}</p> : <></>}
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