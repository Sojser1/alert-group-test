import { mapActions } from 'vuex';
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
      products: null,
      showPage: false,
      filter: null,
    };
  },
  computed: {
    filteredProducts() {
      let result = null;
      if (!this.filter) {
        result = this.products;
      } else {
        // eslint-disable-next-line max-len
        result = this.products.filter((product) => (this.isSuitableProduct(product) ? product : false));
      }
      return result;
    },
  },
  methods: {
    ...mapActions({
      retrieveProducts: 'retrieveProducts',
    }),
    getAllProducts() {
      this.showPage = false;
      this.retrieveProducts()
        .then((result) => {
          this.products = result.data;
          this.showPage = true;
        });
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
      // eslint-disable-next-line max-len
      if (this.filter.price[0] * 1000000 >= product.price || this.filter.price[1] * 1000000 < product.price) return false;
      // eslint-disable-next-line max-len
      if (this.filter.area[0] > product.square || this.filter.area[1] < product.square) return false;
      return !(this.filter.floor[0] >= product.floor || this.filter.floor[1] <= product.floor);
    },
  },
};
