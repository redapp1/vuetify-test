import Vue from 'vue'
import App from './App0.vue'
import vuetify from './plugins/vuetify';
import router from './routes/routes'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
