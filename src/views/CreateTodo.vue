<template>
  <form @submit.prevent="createTodo">
    <div>
      <MyInput label="userID" placeHolder="id" v-model="todo.id" />
      <span class="error" v-if="v$.todo.id.$error">{{
        v$.todo.id.$errors[0].$message
      }}</span>
    </div>

    <div>
      <MyInput label="Name" placeHolder="name" v-model="todo.title" />
      <span class="error" v-if="v$.todo.title.$error">{{
        v$.todo.title.$errors[0].$message
      }}</span>
    </div>

    <MyButton
      :label="Boolean(isEdit) === true ? 'Update Todo' : 'Create Todo'"
    />
  </form>
</template>

<script src="../services/todo/create-todo.js"></script>

<style>
.error {
  color: red;
}
</style>
