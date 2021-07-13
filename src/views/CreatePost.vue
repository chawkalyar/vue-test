<template>
  <form @submit.prevent="createPost">
    <div>
      <MyInput label="PostID" placeHolder="id" v-model="post.id" />
      <span class="error" v-if="v$.post.id.$error">{{
        v$.post.id.$errors[0].$message
      }}</span>
    </div>

    <div>
      <MyInput label="Title" placeHolder="title" v-model="post.title" />
      <span class="error" v-if="v$.post.title.$error">{{
        v$.post.title.$errors[0].$message
      }}</span>
    </div>

    <MyButton
      :label="Boolean(isEdit) === true ? 'Update Post' : 'Create Post'"
    />
  </form>
</template>

<script src="../services/post/create-post.js"></script>

<style>
.error {
  color: red;
}
</style>
