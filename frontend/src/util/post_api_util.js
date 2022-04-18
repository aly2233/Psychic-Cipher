import axios from 'axios';


export const fetchPosts = (field, fieldId, limit, skip) => {
    return axios({
        method: 'get',
        url: '/api/posts/',
        params: {
          [field] : fieldId,
          limit: limit,
          skip: skip
        }
      });
}

export const fetchJournalPosts = (userId, limit, skip) => {
    return axios({
        method: 'get',
        url: `/api/posts/users/${userId}/journal`,
        params: {
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
  console.log(post._id)
    return axios.patch(`/api/posts/${post.id || post._id}`, post)
}

export const deletePost = (postId) => {
   return axios.delete(`/api/posts/${postId}`)
}
