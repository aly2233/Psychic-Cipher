import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions"

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_POSTS:
            // newState.all = action.posts.data
            // postsArray = action.posts.data
            // postsObj
            // debugger
            return action.posts.data
            // return newState
            // return action.posts
        case RECEIVE_POST:
            // debugger
            newState[action.post._id] = action.post.data
            return newState
        case REMOVE_POST:
            let matchingKey = Object.keys(newState).filter( key => newState[key]._id === action.postId.data)
            delete newState[matchingKey]
            return newState
        default:
            return oldState;
    }
}

export default postsReducer