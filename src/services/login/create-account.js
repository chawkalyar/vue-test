import { required, minLength, email } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "CreateAccount",
  components: {
    MyButton,
    MyInput,
  },
  computed: {
    ...mapGetters("userModule", ["userData"]),
  },
  created() {
    if (this.$route.params.isEdit) {
      this.isEdit = this.$route.params.isEdit;
      this.user = this.$store.state.userModule.user;
    }
  },
  data() {
    return {
      v$: useValidate(),
      isEdit: false,
      showPassword: true,
      user: {
        name: "",
        email: "",
        password: "",
        role: "user",
      },
    };
  },

  validations: {
    user: {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    createAccount() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("userModule/updateAuthUser", this.user);
          this.$router.push({ name: "AuthUser" });
        } else {
          this.$store.dispatch("userModule/createUserAccount", this.user);
          if (this.$store.state.userModule.isUserExist === false) {
            this.$router.push({ name: "Login" });
          }
        }
      } else {
        console.log("error");
      }
    },

    showOrHidePassword($e) {
      $e.preventDefault();
      this.showPassword = !this.showPassword;
    },
  },
};
