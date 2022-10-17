<template>
  <div>
    <slot></slot>
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
  },
};
</script>

<style></style>
