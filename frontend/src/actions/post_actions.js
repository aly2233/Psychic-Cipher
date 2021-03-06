import *  as PostApiUtil from "../util/post_api_util";
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

// export const fetchCardPosts = (card_id) => dispatch => {
//     return PostApiUtil.fetchCardPosts(card_id)
//         .then( posts => dispatch(receivePosts(posts)))
//         .catch(err => console.log(err))
// }

export const fetchPosts = (field, fieldId, limit = 0, skip = 0) => dispatch =>  {
    return PostApiUtil.fetchPosts(field, fieldId, limit, skip)
        .then( posts => dispatch(receivePosts(posts)))
        .catch(err => console.log(err))
}

export const fetchJournalPosts = (userId, limit = 0, skip = 0) => dispatch => {
    return PostApiUtil.fetchJournalPosts(userId, limit, skip)
        .then( posts => dispatch(receivePosts(posts)))
        .catch(err => console.log(err))
}

export const fetchPost = (postId) => dispatch => {
    return PostApiUtil.fetchPost(postId)
        .then( post => dispatch(receivePost(post)))
        .catch(err => console.log(err))
}

export const updatePost = (post) => dispatch => {
    console.log(post)
    return PostApiUtil.updatePost(post)
        .then( post => dispatch(receivePost(post)))
        .catch(err => console.log(err))
}

export const createPost = (post) => dispatch => {
    return PostApiUtil.createPost(post)
        .then( post => dispatch(receivePost(post)))
        .catch(err => console.log(err))
}

export const deletePost = (postId) => dispatch => {
    return PostApiUtil.deletePost(postId)
        .then( postId => dispatch(removePost(postId)))
        .catch(err => console.log(err))
}