import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { deletePost, fetchPosts } from "../../actions/post_actions"
import PostIndex from "./post_index.jsx"

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        loggedIn: state.session.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts) => dispatch(fetchPosts(posts))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))