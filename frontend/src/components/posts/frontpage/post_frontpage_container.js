import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// import {fetchPosts } from "../../actions/post_actions"
import { fetchPosts } from "../../../actions/post_actions"
import { fetchUser } from "../../../actions/user_actions"
import PostFrontpage from "./post_frontpage.jsx"


const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        loggedIn: state.session.isAuthenticated,
        authors: state.users

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (limit, skip) => dispatch(fetchPosts(null, null, limit, skip)),
        fetchAuthor: (userId) => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFrontpage))