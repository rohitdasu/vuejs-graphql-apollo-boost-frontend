import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false;

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueMaterial from 'vue-material'

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

import VueApollo from 'vue-apollo'
const apolloClient = new ApolloClient({
  uri: 'https://assignment-rewoke.herokuapp.com/graphql'
})

import { routes } from "./routes";

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueApollo);
Vue.use(Chartkick.use(Chart));
Vue.use(VueMaterial)
Vue.use(VueRouter);

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
