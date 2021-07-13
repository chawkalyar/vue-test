import { required, minLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "CreateUser",
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
      user: {
        id: "",
        name: "",
      },
    };
  },

  validations: {
    user: {
      id: { required },
      name: { required, minLength: minLength(3) },
    },
  },
  methods: {
    createUser() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("userModule/updateUser", this.user);
        } else {
          this.$store.dispatch("userModule/createUser", this.user);
        }
        this.$router.push({ name: "Users" });
      } else {
        console.log("error");
      }
    },
  },
};
