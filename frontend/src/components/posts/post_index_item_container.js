import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import PostIndexItem from "./post_index_item"

const { fetchPost, deletePost } = require("../../actions/post_actions")

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        // author: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchPost: postId => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        // fetchAuthor: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem)