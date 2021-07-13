import axios from "axios"
import BASE_URL from "../../const/const"

const userAPI = {
    getUserList,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}

function getUserList(){
    return axios.get(`${BASE_URL}users`)
}
function getUserByID(){
    return axios.get(`${BASE_URL}users/${id}`)
}
function createUser(user){
    return axios.post(`${BASE_URL}users`,user)
}
function updateUser(user){
    return axios.put(`${BASE_URL}users/${user.id}`,user)
}
function deleteUser(id){
    return axios.delete(`${BASE_URL}users/${id}`)
}

export default userAPI;
