import labelConstants from '@/shared/constant/constant';
import RangeSelector from '../range-selector/range-selector.vue';
import RoomPicker from '../room-picker/room-picker.vue';
import FilterActions from '../filter-actions/filter-actions.vue';

export default {
  components: {
    RangeSelector,
    RoomPicker,
    FilterActions,
  },
  data() {
    return {
      labelConstants,
      filter: {
        rooms: new Set(),
        floor: [0, 99],
        area: [0, 99],
        price: [0, 99],
      },
    };
  },
  methods: {
    applyFilter() {
      this.$emit('apply-filter', this.filter);
    },
    resetFilter() {
      this.filter = {
        rooms: new Set(),
        floor: [0, 99],
        area: [0, 99],
        price: [0, 99],
      };
      this.$emit('reset-filter');
    },
  },
};
