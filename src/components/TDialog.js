import Vue from "vue";
import TDialog from "./TDialog.vue";
console.log(TDialog);
let DialogPlugin = Vue.extend(TDialog);
let instance;

const dialog = function (opts = {}) {
  instance = new DialogPlugin({
    props: {
      ...opts,
      visible: {
        type: Boolean,
        default: true,
      },
      onOk: {
        default() {
          return opts.onOk;
        },
      },
    },
  });
  instance.hide = function () {
    this.visible = false;
  };
  console.log(instance);
  //   console.log(document.body);
  document.body.appendChild(instance.$mount().$el);
  return instance;
};
export default dialog;
