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
      isEdit: false,
      show: false,
      edit: false,
      deleteIndex: -1,
    };
  },

  computed: {
    ...mapGetters("userModule", ["userData"]),
  },

  methods: {
    deleteAuthUser() {
      this.$store.dispatch("userModule/deleteAuthUser", this.deleteIndex);
    },

    showModal(index) {
      this.edit = false;
      this.deleteIndex = index;
      this.show = true;
    },

    editAuthUser(user) {
      this.$store.dispatch("userModule/addUser", user);
      this.$router.push({
        name: "CreateAccount",
        params: { isEdit: true },
      });
    },
  },
};
