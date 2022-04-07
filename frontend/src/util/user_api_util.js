const { default: axios } = require("axios")

export const fetchUsers = () => {
    return axios.get('/api/users')
}

export const fetchUsersById = (userIds) => {
    
}

export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`)
}