import { connect } from "react-redux"
import { updateUser } from "../../actions/user_actions"
import EditProfileForm from "./edit_profile"
import { fetchUser } from "../../actions/user_actions"


const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id,
        currentUser: state.users[state.session.user.id] ? state.users[state.session.user.id].data : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfileForm)