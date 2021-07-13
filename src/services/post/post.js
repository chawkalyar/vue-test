import { mapGetters } from "vuex";
import Modal from "../../components/Modal.vue";
import MyButton from "../../components/button/MyButton.vue";


export default {
  name: "Post",
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
    this.$store.dispatch("postModule/getPostList");
  },
  computed: {
    ...mapGetters("postModule", ["postData"]),
  },

  methods: {
    deletePost() {
      this.$store.dispatch("postModule/deletePost",this.deleteIndex);
      console.log(this.deleteIndex)
    },

    showModal(index) {
      this.edit = false;
      this.deleteIndex = index;
      this.show = true;
    },

    editPost(post) {
      this.$store.dispatch("postModule/addPost", post);
      this.$router.push({ name: "CreatePost", params: { isEdit: true } });
    },
  },
};
