import imageSelect from '@/helpers/image-select';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageSelect,
    };
  },
  methods: {
    priceForOneMetre(price, square) {
      return new Intl.NumberFormat().format(Number((price / square).toFixed(0)));
    },
    formatedPrice(price) {
      return new Intl.NumberFormat().format(Number((price).toFixed(0)));
    },
  },
};
