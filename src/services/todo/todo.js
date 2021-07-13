import { mapActions, mapGetters } from "vuex";
import Modal from "../../components/Modal.vue";
import MyButton from "../../components/button/MyButton.vue";


export default {
  components: {
    Modal,
    MyButton,
  },
  data() {
    return {
      show: false,
      edit: false,
      deleteIndex: -1,
    };
  },
  created() {
    this.getTodoList();
  },
  computed: {
    ...mapGetters("todoModule", ["todoData"]),
  },
  methods: {
    ...mapActions("todoModule", ["getTodoList"]),
    
      deleteTodo() {
        this.$store.dispatch("todoModule/deleteTodo", this.deleteIndex);
      },
  
      showModal(index) {
        this.edit = false;
        this.deleteIndex = index;
        this.show = true;
      },
  
      editTodo(todo) {
        this.$store.dispatch("todoModule/addTodo", todo);
        this.$router.push({ name: "CreateTodo", params: { isEdit: true } });
      },
    },
  
};
