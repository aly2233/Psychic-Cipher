// import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions"

// const postsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState)
//     const newState = Object.assign({}, oldState)
//     switch(action.type) {
//         case RECEIVE_POSTS:
//             newState.all = action.posts.data
//             return newState
//             // return action.posts
//         case RECEIVE_POST:
//             // newState[action.post.id] = action.post 
//             newState.user = action.post.data
//             return newState
//         case REMOVE_POST:
//             delete newState[action.postId]
//             return newState
//         default:
//             return oldState;
//     }
// }

// export default postsReducer