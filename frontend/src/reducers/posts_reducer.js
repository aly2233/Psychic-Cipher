import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions"

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    let matchingKey
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts.data
        case RECEIVE_POST:
            matchingKey = Object.keys(newState).filter( key => newState[key]._id === action.post.data._id)
            newState[matchingKey.length? matchingKey : Object.keys(newState).length] = action.post.data
            return newState
        case REMOVE_POST:
            matchingKey = Object.keys(newState).filter( key => newState[key]._id === action.postId.data)
            delete newState[matchingKey]
            return newState
        default:
            return oldState;
    }
}
export default postsReducer