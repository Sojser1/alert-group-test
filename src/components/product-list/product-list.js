import { mapActions } from 'vuex';
import ProductCard from '../product-card/product-card.vue';
import ProductFilter from '../product-filter/product-filter.vue';

export default {
  components: {
    ProductCard,
    ProductFilter,
  },
  created() {
    this.retrieveProducts()
      .then((r) => {
        this.responseHandler(r.data);
      });
  },
  data() {
    return {
      filterOptions: {
        maxPrice: 0,
        minPrice: 0,
        minArea: 0,
        maxArea: 0,
        minFloor: 0,
        maxFloor: 0,
      },
    };
  },
  methods: {
    ...mapActions({
      retrieveProducts: 'retrieveProducts',
    }),
    responseHandler(response) {wip
      this.filterOptions = response.reduce((acc, el) => {

      });
    },
    updateFilterOptions(product) {
      this.filterOptions.maxFloor = product.floor > this.filterOptions.maxFloor
        ? product.floor
        : this.filterOptions.maxFloor;

      this.filterOptions.minFloor = product.floor > this.filterOptions.minFloor
        ? this.filterOptions.minFloor
        : product.floor;

      this.filterOptions.maxPrice = product.price > this.filterOptions.maxPrice
        ? product.price
        : this.filterOptions.maxPrice;

      this.filterOptions.minPrice = product.price > this.filterOptions.minPrice
        ? this.filterOptions.minPrice
        : product.price;

      this.filterOptions.maxArea = product.square > this.filterOptions.maxArea
        ? product.square
        : this.filterOptions.maxFloor;

      this.filterOptions.minArea = product.square > this.filterOptions.minArea
        ? this.filterOptions.minArea
        : product.square;
    },
  },
};
