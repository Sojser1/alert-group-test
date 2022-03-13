import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,
  },
  getters: {
    getProducts: (state) => state.products,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    retrieveProducts({ commit }) {
      axios.get('http://localhost:3000/products')
        .then((response) => {
          commit('setProducts', response.data);
        });
    },
  },
  modules: {},
});
