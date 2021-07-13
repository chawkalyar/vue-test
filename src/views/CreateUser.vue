<template>
  <form @submit.prevent="createUser">
    <div>
      <MyInput label="UserID" placeHolder="id" v-model="user.id" />
      <span class="error" v-if="v$.user.id.$error">{{
        v$.user.id.$errors[0].$message
      }}</span>
    </div>

    <div>
      <MyInput label="Name" placeHolder="name" v-model="user.name" />
      <span class="error" v-if="v$.user.name.$error">{{
        v$.user.name.$errors[0].$message
      }}</span>
    </div>

    <MyButton
      :label="Boolean(isEdit) === true ? 'Update User' : 'Create User'"
    />
  </form>
</template>

<script src="../services/user/create-user.js"></script>

<style>
.error {
  color: red;
}
</style>
