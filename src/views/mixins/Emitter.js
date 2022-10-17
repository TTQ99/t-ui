export default {
  methods: {
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
    _broadcast() {},
  },
};
