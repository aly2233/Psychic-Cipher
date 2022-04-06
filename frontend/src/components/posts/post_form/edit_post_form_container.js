import { connect } from "react-redux"
import { updatePost } from "../../../actions/post_actions"
import PostForm from "./post_form"

const mapStateToProps = state => {
    return {
        userId: state.session.user.id,
        formType: 'Edit Post'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: post => dispatch(updatePost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)