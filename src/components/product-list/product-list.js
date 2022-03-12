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
    };
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
  },
};
