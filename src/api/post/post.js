import axios from "axios"
import BASE_URL from "../../const/const"

const postAPI = {
    getPostList,
    getPostByID,
    updatePost,
    deletePost,
    createPost
}

function getPostList() {
    return axios.get(`${BASE_URL}posts`)
}
function getPostByID(id) {
    return axios.get(`${BASE_URL}posts/${id}`)
}
function updatePost(post) {
    return axios.put(`${BASE_URL}posts/${post.id}`,post)
}
function createPost(post) {
    return axios.post(`${BASE_URL}posts`,post)
}
function deletePost(id){
    return axios.delete(`${BASE_URL}posts/${id}`)
}

export default postAPI;