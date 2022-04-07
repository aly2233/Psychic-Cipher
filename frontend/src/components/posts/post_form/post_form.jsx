import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PostForm = ({submitForm, post, formType, userId, cardId, togglePostWindow}) => {
    const [text, setText] = useState(post ? post.body : '')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let postObj = {userId: userId, cardId: cardId, body:text}
        if(post)  postObj['id'] = post._id;
        submitForm(postObj)
        // submitForm({userId: userId, cardId: cardId, body:text, id: post._id})
        // setText('')
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
                <Link to="/posts" className="link-button" >Cancel</Link>
                <button className="link-button">Submit</button>
            </div>
        </form>
    )
}



// class PostForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {user: this.props.userId, body: ''}
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    




//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.createPost(this.state)
//     }



//     update(field) {
//         return e => {
//             this.setState({ [field]: e.target.value})
//         }
//         // setText(e.target.value)
//     }
    
    
//     render () {
//         if(!this.props) return null
//         console.log(this.props.createPost)
//         return (
//             <form onSubmit={this.handleSubmit} className="post-form">
//             <p>What would you like to say about your card?</p>
//             <textarea
//             value={this.state.body}
//                 onChange={this.update('body')}
//             />
//             <div className="post-form-buttons" >
//                 <Link to="/posts" className="link-button" >Cancel</Link>
//                 <button className="link-button">Submit</button>
//             </div>
//         </form>
//             )
//         }
//     }
    export default PostForm