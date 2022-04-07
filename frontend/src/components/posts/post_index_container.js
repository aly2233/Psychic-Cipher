import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { deletePost, fetchPosts } from "../../actions/post_actions"
import { fetchUsersById } from "../../actions/user_actions"
import PostIndex from "./post_index.jsx"

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        loggedIn: state.session.isAuthenticated,
        userId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts, limit, skip) => dispatch(fetchPosts(posts, limit, skip)),
        fetchAuthors: (userIds) => dispatch(fetchUsersById(userIds))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))