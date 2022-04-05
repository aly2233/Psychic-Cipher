import { connect } from "react-redux"
import PostForm from "./post_form"
const { createPost } = require("../../../actions/post_actions")

const mapStateToProps = state => {
    return {
        userId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)