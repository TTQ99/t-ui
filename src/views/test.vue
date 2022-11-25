<template>
  <div>
    <t-form>
      <t-form-item> </t-form-item>
    </t-form>
    <button @click="show = true">show</button>
    <button @click="showDialog">show2</button>
    <t-dialog
      @close="show = false"
      :visible="show"
      :modal="false"
      :onOk="tslog"
    >
      <div class="box">title</div>
    </t-dialog>
  </div>
</template>

<script>
import TForm from "./TForm.vue";
import TFormItem from "./TFormItem.vue";
import TDialog from "../components/TDialog.vue";
export default {
  name: "test-page",
  components: {
    TForm,
    TFormItem,
    TDialog,
  },
  data() {
    return {
      show: false,
      dialog: null,
    };
  },
  mounted() {},
  methods: {
    tslog() {
      console.log(123);
    },
    showDialog() {
      this.dialog = this.$dialog({
        onOk: () => {
          console.log(111);
          this.dialog.hide();
        },
      });
    },
  },
};
</script>

<style>
.box {
  height: 500px;
}
</style>
