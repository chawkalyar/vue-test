<template>
  <div class="navbar" v-if="$store.state.userModule.isLogin === true">
    <router-link :to="{ name: 'Posts' }">Posts</router-link>
    <router-link :to="{ name: 'Todos' }">Todos</router-link>

    <router-link
      v-if="
        ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
          !$store.state.userModule.isFreeUser
      "
      :to="{ name: 'Users' }"
      >Users</router-link
    >
    <router-link
      v-if="!$store.state.userModule.isFreeUser"
      :to="{ name: 'AuthUser' }"
      >User lists</router-link
    >

    <router-link
      v-if="$store.state.userModule.isFreeUser"
      :to="{ name: 'CreateAccount' }"
      >Create Account</router-link
    >

    <MyButton
      @click="logout"
      :label="$store.state.userModule.isFreeUser ? 'Login' : 'Logout'"
      :extraStyle="{ background: 'orange' }"
    />
    <h1
      v-if="
        ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
          !$store.state.userModule.isFreeUser
      "
    >
      {{ $store.state.userModule.loginUser.name }}
    </h1>
  </div>
  <div v-else class="navbar">
    <h1>Vue Tutorial</h1>
  </div>
</template>

<script>
import MyButton from "../button/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  methods: {
    logout() {
      this.$store.dispatch("userModule/userLogout", false);
      this.$router.push({ name: "Login" });
    },
    createUserAccount() {
      this.$router.push({ name: "CreateAccount" });
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #008489;
  padding: 20px;
}
.navbar a {
  font-weight: bold;
  color: white;
  margin: auto 12px;
  font-size: 18px;
  text-decoration: none;
}

h1 {
  font-weight: bold;
  color: #ffffff;
}

.navbar a.router-link-exact-active {
  color: orange;
}
</style>
