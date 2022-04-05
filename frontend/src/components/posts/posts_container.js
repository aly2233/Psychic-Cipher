import { connect } from "react-redux"
import Post from "./post"

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (posts) => dispatch(fetchPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post )