import { mapGetters } from "vuex";
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
    this.$store.dispatch("userModule/getUserList");
  },
  computed: {
    ...mapGetters("userModule", ["userData"]),
  },

  methods: {
    deleteUser() {
      this.$store.dispatch("userModule/deleteUser", this.deleteIndex);
    },

    showModal(index) {
      this.edit = false;
      this.deleteIndex = index;
      this.show = true;
    },

    editUser(user) {
      this.$store.dispatch("userModule/addUser", user);
      this.$router.push({ name: "CreateUser", params: { isEdit: true } });
    },
  },
};
