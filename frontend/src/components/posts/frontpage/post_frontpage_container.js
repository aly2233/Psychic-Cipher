import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// import {fetchPosts } from "../../actions/post_actions"
import { fetchPosts } from "../../../actions/post_actions"
import PostFrontpage from "./post_frontpage.jsx"


const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        loggedIn: state.session.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts, limit, skip) => dispatch(fetchPosts(posts, limit, skip))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFrontpage))