import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Quran from '../views/Quran';
import Page from '../components/Quran/Book/Page'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home},
    { path: '/quran', redirect: '/quran/page'},
    { path: '/quran/page', redirect: '/quran/page/1'},
    { 
        path: '/quran/page/:page', 
        name: 'page', 
        component: Page,
        props: (route) => ({ pageNumber: +route.params.page })
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})