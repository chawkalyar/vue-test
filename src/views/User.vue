<template>
  <button
    class="button"
    v-if="$store.state.userModule.loginUser.role !== 'user'"
  >
    <router-link
      class="router"
      v-if="
        $store.state.userModule.loginUser.role == 'admin' &&
          !$store.state.userModule.isFreeUser
      "
      :to="{ name: 'CreateUser' }"
      >Create User</router-link
    >
  </button>
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th v-if="$store.state.userModule.loginUser.role !== 'user' ">Actions</th>
    </tr>

    <tr v-for="(user, index) in userData" :key="index">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>

      <td>
        <MyButton
          label="Edit"
          @click="editUser(user)"
          v-if="
            $store.state.userModule.loginUser.role == 'admin' &&
              !$store.state.userModule.isFreeUser
          "
        />

        <MyButton
          label="Delete"
          class="button delete"
          @click="showModal(user.id)"
          v-if="
            $store.state.userModule.loginUser.role == 'admin' &&
              !$store.state.userModule.isFreeUser
          "
        />
      </td>
    </tr>
  </table>

  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deleteUser()"
      >"Are you sure you want to delete ?"
    </Modal>
  </teleport>
</template>

<script src="../services/user/user.js" />

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
