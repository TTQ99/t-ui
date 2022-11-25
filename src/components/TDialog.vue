<template>
  <div class="t-dialog" v-if="visible">
    <div class="mask" @click="close" v-if="modal"></div>
    <div class="dialog-content" :style="{ width: width }">
      <div class="dialog-header">
        <slot name="header">{{ title }}</slot>
      </div>
      <div class="dialog-main">
        <slot>main</slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer">
          <button @click="close">取消</button>
          <button @click="ok">确认</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "title",
    },
    modal: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "50%",
    },
    onOk: {
      type: Function,
      default() {
        return function () {};
      },
    },
    onClose: {
      type: Function,
      default() {
        return function () {};
      },
    },
  },
  watch: {
    visible() {
      if (this.visible) {
        this.$emit("open");
      }
    },
  },
  methods: {
    close() {
      this.onClose();
      this.$emit("close", false);
    },
    ok() {
      this.onOk();
    },
  },
};
</script>

<style scoped>
.t-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.dialog-content {
  position: absolute;
  top: 25%;
  left: 50%;
  margin-left: -250px;
  z-index: 1;
  width: 500px;
  /* height: 500px; */
  background: #fff;
  border-radius: 6px;
  border: 1px solid #e8f3ff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.dialog-header {
  padding: 12px;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #e8f3ff;
  text-align: left;
}
.dialog-main {
  min-height: 100px;
  padding-bottom: 60px;
}
.dialog-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 0;
  height: 36px;
  line-height: 36px;
  border-top: 1px solid #e8f3ff;
  text-align: right;
}
button {
  margin: 0 6px;
}
</style>
