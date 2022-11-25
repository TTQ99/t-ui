<template>
  <div>
    <slot></slot>
    <button @click="disp">dispatch</button>
  </div>
</template>

<script>
export default {
  name: "TFormItem",
  mounted() {
    this.$on("tfromitem", this.onhandle);
  },
  methods: {
    disp(e) {
      this._dispatch("TForm", "submit", e);
    },
    onhandle(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
