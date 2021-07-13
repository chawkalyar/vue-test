import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import postAPI from "../api/post/post";
import todoAPI from "../api/todo/todo";
import userAPI from "../api/user/user";

const userModule = {
  namespaced: true,
  state: () => ({
    user: {},
    users: [],
    isFreeUser: false,
    isUserExist: false,
    loggedUsers: [
      {
        name: "User",
        email: "user@gmail.com",
        password: "password",
        role: "user",
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: "password",
        role: "admin",
      },
    ],
    loginUser: {},
    isLogin: false,
  }),
  mutations: {
    login(state, loginUser) {
      if (typeof loginUser === "boolean") {
        state.isLogin = loginUser;
        state.isFreeUser = true;
      } else {
        let index = state.loggedUsers.findIndex((user) => {
          return (
            user.email === loginUser.email &&
            user.password === loginUser.password
          );
        });
        if (index !== -1) {
          state.loginUser = state.loggedUsers[index];
          state.isLogin = true;
          state.isFreeUser = false;
        }
      }
    },
    userLogout(state, logout) {
      state.isLogin = logout;
    },
    getUserList(state, users) {
      state.users = users;
    },
    getUserByID(state, user) {
      state.user = user;
    },
    createUser(state, user) {
      state.users.push(user);
    },
    AddUser(state, user) {
      console.log("added user ", user);
      state.user = user;
    },
    updateUser(state, user) {
      let index = state.users.findIndex((userList) => userList.id === user.id);
      if (index !== -1) {
        state.users[index] = user;
      }
    },
    deleteUser(state, id) {
      let index = state.users.findIndex((userList) => userList.id === id);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    createUserAccount(state, newUser) {
      const result = state.loggedUsers.filter((user) => {
        return user.email === newUser.email;
      });
      if (result.length === 0) {
        state.loggedUsers.push(newUser);
        state.isUserExist = false;
      } else {
        console.log("user exist");
        state.isUserExist = true;
      }
    },
    deleteAuthUser(state,email){
      const index=state.loggedUsers.findIndex((user)=>{
        return user.email===email});
      if(index !==-1){
        state.loggedUsers.splice(index,1);
        
      }
    },
    updateAuthUser(state, updateUser) {
      let index = state.loggedUsers.findIndex((user) => user.email === updateUser.email);
      if (index !== -1) {
        state.loggedUsers[index] = updateUser;
      }
    },
  },
  actions: {
    login({ commit }, user) {
      commit("login", user);
    },
    userLogout({ commit }, logout) {
      commit("userLogout", logout);
    },
    getUserList({ commit }) {
      userAPI.getUserList().then((users) => {
        commit("getUserList", users.data);
      });
    },
    getUserByID({ commit }, id) {
      userAPI.getUserByID(id).then((user) => {
        commit("getUserByID", user.data);
      });
    },
    createUser({ commit }, user) {
      userAPI.createUser(user).then((response) => {
        console.log(response);
        commit("createUser", user);
      });
    },
    updateUser({ commit }, user) {
      userAPI.updateUser(user).then((response) => {
        console.log(response);
        commit("updateUser", user);
      });
    },
    deleteUser({ commit }, id) {
      userAPI.deleteUser(id).then((response) => {
        console.log(response);
        commit("deleteUser", id);
      });
    },
    addUser({ commit }, user) {
      commit("AddUser", user);
    },
    createUserAccount({ commit }, user) {
      commit("createUserAccount", user);
    },

    deleteAuthUser({commit},email){
      commit("deleteAuthUser",email)
    },

    updateAuthUser({commit},user){
      commit("updateAuthUser",user)
    }
  },
  getters: {
    userData(state) {
      return state.users;
    },
  },
};

const postModule = {
  namespaced: true,
  state: () => ({
    post: {},
    posts: [],
  }),
  mutations: {
    getPostList(state, posts) {
      state.posts = posts;
    },
    getPostByID(state, post) {
      state.post = post;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    AddPost(state, post) {
      console.log("added post ", post);
      state.post = post;
    },
    updatePost(state, updatePost) {
      let index = state.posts.findIndex((post) => post.id === updatePost.id);
      if (index !== -1) {
        state.posts[index] = updatePost;
      }
    },
    deletePost(state, id) {
      const index = state.posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
  },
  actions: {
    getPostList({ commit }) {
      postAPI.getPostList().then((posts) => {
        commit("getPostList", posts.data);
      });
    },
    getPostByID({ commit }, id) {
      postAPI.getPostByID(id).then((response) => {
        commit("getPostByID", response.data);
      });
    },
    createPost({ commit }, post) {
      postAPI.createPost(post).then((response) => {
        console.log(response);
        commit("createPost", post);
      });
    },
    updatePost({ commit }, post) {
      postAPI.updatePost(post).then((response) => {
        console.log(response);
        commit("updatePost", post);
      });
    },
    deletePost({ commit }, id) {
      postAPI.deletePost(id).then((response) => {
        console.log("delete response => ", response);
        commit("deletePost", id);
      });
    },
    addPost({ commit }, post) {
      commit("AddPost", post);
    },
  },
  getters: {
    postData(state) {
      return state.posts;
    },
  },
};

const todoModule = {
  namespaced: true,
  state: () => ({
    todos: [],
    todo: {},
  }),
  mutations: {
    getTodoList(state, todos) {
      state.todos = todos;
    },
    getTodoByID(state, todo) {
      state.todo = todo;
    },
    createTodo(state, todo) {
      state.todos.push(todo);
    },
    AddTodo(state, todo) {
      console.log("added todo ", todo);
      state.todo = todo;
    },
    updateTodo(state, updateTodo) {
      let index = state.todos.findIndex((todo) => todo.id === updateTodo.id);
      if (index !== -1) {
        state.todos[index] = updateTodo;
      }
    },
    deleteTodo(state, id) {
      let index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
  actions: {
    getTodoList({ commit }) {
      todoAPI.getTodoList().then((response) => {
        commit("getTodoList", response.data);
      });
    },
    getTodoByID({ commit }, id) {
      todoAPI.getTodoByID(id).then((response) => {
        commit("getTodoByID", response.data);
      });
    },
    createTodo({ commit }, todo) {
      todoAPI.createTodo(todo).then((response) => {
        console.log(response);
        commit("createTodo", todo);
      });
    },
    updateTodo({ commit }, todo) {
      todoAPI.updateTodo(todo).then((response) => {
        console.log(response);
        commit("updateTodo", todo);
      });
    },
    deleteTodo({ commit }, id) {
      todoAPI.deleteTodo(id).then((response) => {
        console.log("delete response => ", response);
        commit("deleteTodo", id);
      });
    },
    addTodo({ commit }, todo) {
      commit("AddTodo", todo);
    },
  },
  getters: {
    todoData(state) {
      return state.todos;
    },
  },
};

const store = new createStore({
  modules: {
    userModule,
    postModule,
    todoModule,
  },
  plugins: [createPersistedState()],
});
export default store;
