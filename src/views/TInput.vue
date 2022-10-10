<template>
  <div>
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "TInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods:{
      onInput(e){
          this.$emit('input', e.target.value)
      }
  }
};
</script>

<style>
</style>