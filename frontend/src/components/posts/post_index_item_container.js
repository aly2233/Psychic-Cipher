import { connect } from "react-redux"
import PostIndexItem from "./post_index_item"

const { fetchPost, deletePost } = require("../../actions/post_actions")

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        // author:
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem)