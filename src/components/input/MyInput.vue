<template>
  <div>
    <label class="label">{{ label }}</label>
    <input class="input" :type="inputType" :placeholder="placeHolder"
    :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeHolder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.label {
  display: block;
  font-size: 14px;
}
.input {
  padding: 8px;
  border: 1px solid blue;
}
</style>
