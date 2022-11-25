function broadcast(componentName, eventName, params) {
  console.log(this);
}

export default {
  methods: {
    // 向上级组件触发事件，传递数据
    _dispatch(componentName, eventName, params) {
      console.log(arguments);
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      console.log(parent, name);
      while (parent && name !== componentName) {
        parent = parent.$parent;
        if (parent) {
          name = params.$options.name;
        }
      }
      console.log(parent);
      if (parent) {
        parent.$emit.apply(parent, [eventName, params]);
      }

      //   let name =
      //   let parent = this.$parent || this.$root;
      //   let name = parent.$options.name;
      //   while (parent && (!name || name !== componentName)) {
      //     parent = parent.$parent;
      //     if (parent) {
      //       name = parent.$options.name;
      //     }
      //   }
      //   if (parent) {
      //     parent.$emit.apply(parent, [eventName, params]);
      //   }
    },
    // 向下级组件触发事件，传递数据
    _broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
