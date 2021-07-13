<template>
  <button
    class="button"
    v-if="$store.state.userModule.loginUser.role !== 'user'"
  >
    <router-link
      class="router"
      v-if="$store.state.userModule.loginUser.role == 'admin'"
      :to="{ name: 'CreateAccount' }"
      >Create Account</router-link
    >
  </button>
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Role</th>
      <th>Action</th>
    </tr>
  <tr
    v-for="(user, index) in $store.state.userModule.loggedUsers"
    :key="index"
  >
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.password }}</td>
    <td>{{ user.role }}</td>

    <td>
      <MyButton
        label="Edit"
        @click="editAuthUser(user)"
        v-if="
          $store.state.userModule.loginUser.role == 'admin' ||
            $store.state.userModule.loginUser.email == user.email
        "
      />

      <MyButton
        label="Delete"
        @click="showModal(user.email)"
        v-if="
          $store.state.userModule.loginUser.role == 'admin' &&
            $store.state.userModule.loginUser.email !== user.email
        "
      />
    </td>
  </tr>
  </table>
  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deleteAuthUser()"
      >"Are you sure you want to delete ?"
    </Modal>
  </teleport>
</template>

<script src="../services/user/auth-user.js" />

<style>
.button {
  background: green;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 15px;
  
}
.button:hover {
  background: rgb(18, 112, 18);
}
.router {
  color: white;
  text-decoration: none;
}
</style>
