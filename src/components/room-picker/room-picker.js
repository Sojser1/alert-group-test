import PickerButton from './picker-button/picker-button.vue';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Set,
    },
  },
  components: {
    PickerButton,
  },
  created() {
    this.activeActions = this.value;
  },
  data() {
    return {
      activeActions: null,
      room1k: false,
      room2k: false,
      room3k: false,
      roomXS: false,
    };
  },
  methods: {
    isActiveAction(value) {
      return this.activeActions.has(value);
    },
    addAction(value) {
      this.activeActions.add(value);
    },
    deleteAction(value) {
      this.activeActions.delete(value);
    },
    onActionClick(value) {
      if (this.isActiveAction(value)) {
        this.deleteAction(value);
      } else {
        this.addAction(value);
      }
      this.$emit('input', this.activeActions);
    },
  },
  watch: {
    value() {
      this.room1k = false;
      this.room2k = false;
      this.room3k = false;
      this.roomXS = false;
    },
  },
};
