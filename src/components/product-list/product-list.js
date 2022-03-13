import { mapActions, mapGetters } from 'vuex';
import ProductCard from '../product-card/product-card.vue';
import ProductFilter from '../product-filter/product-filter.vue';

export default {
  components: {
    ProductCard,
    ProductFilter,
  },
  created() {
    this.getAllProducts();
  },
  data() {
    return {
      filter: null,
    };
  },
  computed: {
    ...mapGetters({
      getProducts: 'getProducts',
    }),
    filteredProducts() {
      let result = null;
      if (!this.filter) {
        result = this.getProducts;
      } else {
        result = this.getProducts.filter((product) => (this.isSuitableProduct(product) ? product : false));
      }
      return result;
    },
  },
  methods: {
    ...mapActions({
      retrieveProducts: 'retrieveProducts',
    }),
    getAllProducts() {
      this.retrieveProducts();
    },
    applyFilter(filter) {
      this.filter = { ...filter };
    },
    resetFilter() {
      this.filter = null;
    },
    isSuitableProduct(product) {
      if (this.filter.rooms.length === 0) return false;
      if (!this.filter.rooms.has(product.size)) return false;
      if (this.filter.price[0] * 1000000 >= product.price || this.filter.price[1] * 1000000 < product.price) return false;
      if (this.filter.area[0] > product.square || this.filter.area[1] < product.square) return false;
      return !(this.filter.floor[0] >= product.floor || this.filter.floor[1] <= product.floor);
    },
  },
};
