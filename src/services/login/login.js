import { email, required } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import { mapActions } from "vuex";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";

export default {
  name: "Login",
  components: {
    MyButton,
    MyInput,
  },

  data() {
    return {
      v$: useValidate(),
      showPassword: true,
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: { email, required },
      password: { required },
    },
  },

  methods: {
    ...mapActions("userModule", ["login"]),
    loginUser($e) {
      $e.preventDefault();
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success ", this.login);

        this.login(this.user);
        this.$router.push({ name: "Posts" });
      } else {
        console.log("error");
      }
    },
    showOrHidePassword($e) {
      $e.preventDefault();
      this.showPassword = !this.showPassword;
    },
    goToHome() {
      this.$router.push({ name: "Posts", params: { isFree: true } });
      this.login(true);
    },
  },
};
