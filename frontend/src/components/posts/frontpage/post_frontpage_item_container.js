import { connect } from "react-redux"
import PostFrontpageItem from "./post_frontpage_item"
// import { fetchPost } from "../../../util/post_api_util"
import { fetchPost } from "../../../actions/post_actions"


// const { fetchPost, deletePost } = require("../../actions/post_actions")

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

export default connect(mapStateToProps, mapDispatchToProps)(PostFrontpageItem)