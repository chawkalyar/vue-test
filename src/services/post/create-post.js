import { required, minLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "CreatePost",
  components: {
    MyButton,
    MyInput,
  },
  computed: {
    ...mapGetters("postModule", ["postData"]),
  },

  created() {
    if (this.$route.params.isEdit) {
      this.isEdit = this.$route.params.isEdit;
      this.post = this.$store.state.postModule.post;
      
    }
  },
  data() {
    return {
      v$: useValidate(),
      isEdit: false,
      post: {
        id: "",
        title: "",
      },
    };
  },

  validations: {
    post: {
      id: { required },
      title: { required, minLength: minLength(3) },
    },
  },
  methods: {
    createPost() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("postModule/updatePost", this.post);
        } else {
          this.$store.dispatch("postModule/createPost", this.post);
        }
        this.$router.push({ name: "Posts" });
      } else {
        console.log("error");
      }
    },
  },
};
