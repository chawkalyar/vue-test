<template>
  <form>
    <div>
      <MyInput inputType="email" label="Email" placeHolder="Email" v-model="user.email" />
      <span class="error" v-if="v$.user.email.$error">{{
        v$.user.email.$errors[0].$message
      }}</span>
    </div>
    <div>
      <MyInput
        label="Password"
        placeHolder="Password"
        :inputType="showPassword ? 'password' : 'text'"
        v-model="user.password"
      />
      <span class="error" v-if="v$.user.password.$error">{{
        v$.user.password.$errors[0].$message
      }}</span>
    </div>
    <div>
      <MyButton
        :label="showPassword ? 'Show' : 'Hide'"
        @click="showOrHidePassword($event)"
      />
    </div>

    <div>
      <MyButton label="Login" @click="loginUser($event)" />
    </div>
  </form>
  <span class="free-user" @click="goToHome()">Continue as free user</span>
</template>

<script src="../services/login/login.js" />

<style scoped>
.error {
  color: red;

  display: block;
}
.free-user {
  color: blue;
  text-decoration: underline;
}
</style>
