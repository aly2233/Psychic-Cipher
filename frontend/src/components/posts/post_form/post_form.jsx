import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PostForm = ({createPost}) => {
    const [text, setText] = useState('')

    // useEffect( () => {

    // })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createPost()
    }

    const update = (e) => {
        setText(e.target.value)
    }
 
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="post-form">
            <p>What would you like to say about your card?</p>
            <textarea
                value={text}
                onChange={update}
            />
            <div className="post-form-buttons" >
                <Link to="/posts" className="link-button" >Cancel</Link>
                <button className="link-button">Submit</button>
            </div>
        </form>
    )
}

export default PostForm