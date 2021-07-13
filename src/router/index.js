import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import Todo from "../views/Todo.vue";
import Post from "../views/Post.vue";
import CreatePost from "../views/CreatePost.vue";
import CreateUser from "../views/CreateUser.vue";
import CreateAccount from "../views/CreateAccount.vue";
import CreateTodo from "../views/CreateTodo.vue";
import AuthUser from "../views/AuthUser.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/posts/create-post",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: (to, from, next) => {
      if (
        store.state.userModule.isLogin === true &&
        !store.state.userModule.isFreeUser
      ) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },

  {
    path: "/todos/create-todo",
    name: "CreateTodo",
    component: CreateTodo,
    beforeEnter: (to, from, next) => {
      if (
        store.state.userModule.isLogin === true ||
        Boolean(to.params.isFree) === true
      ) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },

  {
    path: "/users/create-user",
    name: "CreateUser",
    component: CreateUser,
    beforeEnter: (to, from, next) => {
      if (
        store.state.userModule.isLogin === true &&
        !store.state.userModule.isFreeUser
      ) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },

  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
    beforeEnter: (to, from, next) => {
      if (
        store.state.userModule.isLogin === true ||
        Boolean(to.params.isFree) === true
      ) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },

  {
    path: "/posts",
    name: "Posts",
    component: Post,
    beforeEnter: (to, from, next) => {
      if (
        store.state.userModule.isLogin === true ||
        Boolean(to.params.isFree) === true
      ) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/users",
    name: "Users",
    component: User,
    beforeEnter: (to, from, next) => {
      if (store.state.userModule.isLogin === true && !store.state.userModule.isFreeUser) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/auth-user",
    name: "AuthUser",
    component: AuthUser,
    beforeEnter: (to, from, next) => {
      if (store.state.userModule.isLogin === true && !store.state.userModule.isFreeUser) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todo,
    beforeEnter: (to, from, next) => {
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
