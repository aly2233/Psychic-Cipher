
import axios from 'axios';


export const fetchPosts = () => {
    // debugger
    return axios.get('/api/posts')
}

export const fetchPost = (postId) => {
    return axios.get(`/api/posts/${postId}`)

}

export const createPost = (post) => {
    return axios.post('/api/posts/', post)
}

export const deletePost = (postId) => {
   return axios.delete('/api/posts/postId')
}

export const updatePost = post => {
    return axios.patch(`/api/posts/${post.id}`)
 
}