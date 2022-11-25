import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/index";
import Emitter from "./views/mixins/Emitter";
import Dialog from "./components/TDialog";

Vue.use(VueRouter);
Vue.mixin(Emitter);
Vue.prototype.$dialog = Dialog;

Vue.config.productionTip = false;


new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
