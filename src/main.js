import Vue from 'vue'
import App from './App0.vue'
import vuetify from './plugins/vuetify';
import router from './routes'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
