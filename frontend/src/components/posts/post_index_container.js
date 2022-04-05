import { connect } from "react-redux"
import { fetchPosts } from "../../actions/post_actions"
import PostIndex from "./post_index.jsx"

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts) => dispatch(fetchPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)