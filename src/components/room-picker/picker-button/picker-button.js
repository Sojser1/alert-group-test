export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickEmit() {
      this.$emit('click');
      this.$emit('input', !this.value);
    },
  },
};
