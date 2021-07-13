<template>
  <form @submit.prevent="createAccount">
    <span class="error" v-if="$store.state.userModule.isUserExist"
      >Email already exist!</span
    >
    <div>
      <MyInput label="Name" placeHolder="name" v-model="user.name" />
      <span class="error" v-if="v$.user.name.$error">{{
        v$.user.name.$errors[0].$message
      }}</span>
    </div>

    <div>
      <MyInput
        label="Role"
        placeHolder="role"
        v-model="user.role"
        v-if="
          !$store.state.userModule.isFreeUser &&
            $store.state.userModule.loginUser.role !== 'user'
        "
      />
    </div>

    <div>
      <MyInput label="Email" placeHolder="email" v-model="user.email" />
      <span class="error" v-if="v$.user.email.$error">{{
        v$.user.email.$errors[0].$message
      }}</span>
    </div>

    <div>
      <MyInput
        label="Password"
        placeHolder="password"
        :inputType="showPassword ? 'password' : 'text'"
        v-model="user.password"
      /><MyButton
        :label="showPassword ? 'Show' : 'Hide'"
        @click="showOrHidePassword($event)"
      />

      <span class="error" v-if="v$.user.password.$error">{{
        v$.user.password.$errors[0].$message
      }}</span>
    </div>

    <MyButton
      :label="Boolean(isEdit) === true ? 'Update User' : 'Create Account'"
    />
  </form>
</template>

<script src="../services/login/create-account.js"></script>

<style>
.error {
  color: red;
}
</style>
