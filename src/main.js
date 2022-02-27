import Vue from 'vue';
import Vuetify from 'vuetify';
import 'animate.css';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
