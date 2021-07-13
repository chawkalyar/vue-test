<template>
  
  <button class="button" v-if="!$store.state.userModule.isFreeUser">
    <router-link
      class="router"
      v-if="
        ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
          !$store.state.userModule.isFreeUser
      "
      :to="{ name: 'CreatePost' }"
      >Create Post</router-link
    >
  </button>
  <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th v-if="!$store.state.userModule.isFreeUser">Actions</th>
    </tr>

    <tr v-for="(post, index) in postData" :key="index">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>

      <td>
        <MyButton
          label="Edit"
          @click="editPost(post)"
          v-if="
            ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
              !$store.state.userModule.isFreeUser
          "
        />

        <MyButton
          label="Delete"
          class="button delete"
          @click="showModal(post.id)"
          v-if="
            ($store.state.userModule.loginUser.role == 'admin' || 'user') &&
              !$store.state.userModule.isFreeUser
          "
        />
      </td>
    </tr>
  </table>

  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deletePost()"
      >"Are you sure you want to delete ?"
    </Modal>
  </teleport>
</template>

<script src="../services/post/post.js" />

<style>

</style>
