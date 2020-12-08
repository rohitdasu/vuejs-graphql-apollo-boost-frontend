import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueMaterial from 'vue-material'

import { apolloProvider } from "./graphql";

import { router } from "./routes";

Vue.use(VueMaterial)

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
