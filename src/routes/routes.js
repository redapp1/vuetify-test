import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Quran from '../views/Quran';
import Page from '../components/Quran/Book/Page'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home},
    { path: '/quran', 
      component: Quran,
      children: [
          { path: '/', redirect: 'page/1'},
          { path: 'page', redirect: 'page/1'},
          { 
            path: 'page/:page', 
            name: 'page', 
            component: Page,
            props: (route) => ({ pageNumber: +route.params.page })
          },
          { 
            path: 'page/:page/edition/:edition', 
            name: 'translation', 
            component: Page,
            props: (route) => ({ pageNumber: +route.params.page, edition: route.params.edition })
          }
      ]
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})