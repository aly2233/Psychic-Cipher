import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { deletePost, fetchPosts } from "../../actions/post_actions"
import { fetchUser } from "../../actions/user_actions"
import PostIndex from "./post_index.jsx"

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        userId: state.session.user ? state.session.user.id : null,
        authors: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts, limit, skip) => dispatch(fetchPosts(posts, limit, skip)),
        fetchAuthor: (userId) => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))