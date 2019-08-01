import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Quran from './views/Quran';
import Page from './components/Quran/Book/Page';
import SignUp from './components/Auth/SignUp';
import FoundedAyahs from './components/Quran/Browser/FoundedAyahs'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home},
    { path: '/signup', component: SignUp, name: 'signup' },
    { path: '/quran', 
      component: Quran,
      children: [
          { path: '/', redirect: 'page/1'},
          { path: 'page', redirect: 'page/1'},
          { 
            path: 'page/:page', 
            name: 'page', 
            component: Page,
            props: (route) => ({ 
              pageNumber: +route.params.page,
              selectedAyah: +route.query.ayah
            })
          },
          { 
            path: 'page/:page/edition/:edition', 
            name: 'translation', 
            component: Page,
            props: (route) => ({ 
              pageNumber: +route.params.page, 
              edition: route.params.edition,
              selectedAyah: +route.query.ayah  
            })
          },
          {
            path: 'search/:keyWord',
            component: FoundedAyahs,
            name: 'search'
          }
      ]
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})