import { connect } from "react-redux"
import PostIndexItem from "./post_index_item"

const { fetchPost } = require("../../actions/post_actions")

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem)