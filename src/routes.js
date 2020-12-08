import result from './components/Result'
import home from './components/Home'
import VueRouter from 'vue-router';
import Vue from 'vue';

export const routes = [
    { path: '', component: home },
    { path: '/result', component: result }
]

export const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);