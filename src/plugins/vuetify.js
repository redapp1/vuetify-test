import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import ar from 'vuetify/lib/locale/ar'

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },

  lang: {
    locales: { ar },
    current: 'ar',
  },
});
