import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    retrieveProducts() {
      return axios.get('http://localhost:3000/products');
    },
  },
  modules: {},
});
