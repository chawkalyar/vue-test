<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content">
      <slot></slot>
      <div class="buttons">
        <MyButton label="Close" class="button close" @click="$emit('close')"/>
        <MyButton label="Delete" class="button delete" @click="$emit('delete')"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/button/MyButton.vue";
export default {
  name: "Modal",
  emits: ["close", "delete"],
  props: {
    isDelete: Boolean,
  },
  components:{
      MyButton,
  }
};
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.modal-content {
  font-family: "Arial";
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 95px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
}

.buttons {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 16px;
}
.button {
  border: 1px solid #c5c5c5;
  border-radius: 10%;
  color: #ffffff;
  padding: 8px;
}
.delete {
  background: red;
  margin-left: 8px;
}
.close {
  background: #808080;
}
</style>
