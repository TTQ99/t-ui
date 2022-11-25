<template>
  <div>
    <slot></slot>
    <button @click="broadcast1">tform</button>
  </div>
</template>

<script>
export default {
  name: "TForm",
  mounted() {
    this.$on("submit", this.loga, "tform");
  },
  methods: {
    loga(val) {
      console.log(val, "tform");
    },
    broadcast1() {
      this._broadcast("TFormItem", "e", "i am tform");
      this.$emit("tfromitem", "i am tform");
    },
  },
};
</script>

<style></style>
