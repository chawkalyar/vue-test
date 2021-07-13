<template>
  <button class="button" :style="extraStyle">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "extraStyle"],
};
</script>

<style scoped>
.button {
  background: #008489;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  margin: auto 7px;
  
}
.button:hover {
  background: #0d5153;
}
</style>
