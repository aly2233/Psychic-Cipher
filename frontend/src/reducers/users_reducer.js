const { RECEIVE_USER, RECEIVE_USERS } = require("../actions/user_actions")

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_USER:
            debugger
            newState[action.user.id] = action.user
            return newState
        default:
            return oldState;
    }
}

export default UsersReducer