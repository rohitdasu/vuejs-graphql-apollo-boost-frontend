import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import result from './components/Result'
import home from './components/Home'

import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false;

import { MdButton, MdToolbar, MdCard, MdField, MdProgress} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  uri: 'https://assignment-rewoke.herokuapp.com/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const routes = [
  { path: '', component: home },
  { path: '/result', component: result }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueApollo);
Vue.use(Chartkick.use(Chart));
Vue.use(MdButton);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdProgress);
Vue.use(MdField);
Vue.use(VueRouter);

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
