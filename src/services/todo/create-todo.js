import { required, minLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "CreateTodo",
  components: {
    MyButton,
    MyInput,
  },
  computed: {
    ...mapGetters("todoModule", ["todoData"]),
  },

  created() {
    if (this.$route.params.isEdit) {
      this.isEdit = this.$route.params.isEdit;
      this.todo = this.$store.state.todoModule.todo;
      
    }
  },
  data() {
    return {
      v$: useValidate(),
      isEdit: false,
      todo: {
        id: "",
        title: "",
      },
    };
  },

  validations: {
    todo: {
      id: { required },
      title: { required, minLength: minLength(3) },
    },
  },
  methods: {
    createTodo() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("todoModule/updateTodo", this.todo);
        } else {
          this.$store.dispatch("todoModule/createTodo", this.todo);
        }
        this.$router.push({ name: "Todos" });
      } else {
        console.log("error");
      }
    },
  },
};
