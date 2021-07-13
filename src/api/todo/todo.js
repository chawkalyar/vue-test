import axios from "axios"
import BASE_URL from "../../const/const"

const todoAPI = {
    createTodo,
    getTodoList,
    updateTodo,
    getTodoByID,
    deleteTodo
}

function createTodo(todo) {
    return axios.post(`${BASE_URL}todos`,todo)
}
function getTodoByID(id) {
    return axios.get(`${BASE_URL}todos/${id}`)
}
function getTodoList() {
    return axios.get(`${BASE_URL}todos`)
}
function updateTodo(todo) {
    return axios.put(`${BASE_URL}todos/${todo.id}`,todo)
}
function deleteTodo(id){
    return axios.delete(`${BASE_URL}todos/${id}`)
}

export default todoAPI;