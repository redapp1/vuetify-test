import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Quran from '../views/Quran';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home},
    { path: '/quran', component: Quran}
]

export default new VueRouter({
    mode: 'history',
    routes
})