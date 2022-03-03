export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  created() {
    this.rangeValue = this.value.slice();
  },
  data() {
    return {
      rangeValue: [0, 25],
    };
  },
  watch: {
    rangeValue: {
      deep: true,
      handler() {
        this.$emit('input', this.rangeValue);
      },
    },
  },
};
