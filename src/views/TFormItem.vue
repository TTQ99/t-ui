<template>
  <div>
    <slot></slot>
    <button @click="disp">dispatch</button>
  </div>
</template>

<script>
export default {
  name: "TFormItem",
  methods: {
    disp(e) {
      this._dispatch("TForm", "submit", e);
    },
  },
};
</script>

<style></style>
