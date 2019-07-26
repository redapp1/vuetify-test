import Vue from 'vue'
import App from './App0.vue'
import vuetify from './plugins/vuetify';
import router from './routes/routes'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
