import axios from 'axios';


export const fetchPosts = (cardId, limit, skip) => {
    return axios({
        method: 'get',
        url: '/api/posts/',
        params: {
          cardId: cardId,
          limit: limit,
          skip: skip
        }
      });
}


export const fetchPost = (postId) => {
    return axios.get(`/api/posts/${postId}`)

}

export const createPost = (post) => {
    return axios.post('/api/posts/', post)
}

export const updatePost = post => {
    return axios.patch(`/api/posts/${post.id}`, post)
}

export const deletePost = (postId) => {
   return axios.delete(`/api/posts/${postId}`)
}
