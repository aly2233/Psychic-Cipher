import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import PostIndexItem from "./post_index_item"
import { deletePost } from "../../actions/post_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem)