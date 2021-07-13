<template>
  <button class="button">
  <router-link  class="router" :to="{ name: 'CreateTodo' }">Create Todo</router-link>
  </button>
  <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th v-if="!$store.state.userModule.isFreeUser">Actions</th>
    </tr>

  <tr v-for="(todo, index) in todoData" :key="index">
    <td>{{ todo.id }}</td>
    <td>{{ todo.title }}</td>

    <td>
      <MyButton
        label="Edit"
        @click="editTodo(todo)"
        v-if="
          ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
            !$store.state.userModule.isFreeUser
        "
      />

      <MyButton
        label="Delete"
        class="button delete"
        @click="showModal(todo.id)"
        v-if="
          ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
            !$store.state.userModule.isFreeUser
        "
      />
    </td>
  </tr>
  </table>
  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deleteTodo()"
      >"Are you sure you want to delete ?"
    </Modal>
  </teleport>
</template>

<script src="../services/todo/todo.js" />

<style></style>
