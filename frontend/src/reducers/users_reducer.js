const { RECEIVE_USER, RECEIVER_USERS } = require("../actions/user_actions")

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_USER:
            return action.users
        case RECEIVER_USERS:
            newState[action.user.id] = action.user
            return newState
        default:
            return oldState;
    }
}

export default UsersReducer