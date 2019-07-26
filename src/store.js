import Vue from 'vue'
import Vuex from 'vuex'
import { QURAN_PAGE_API } from '../config/config';
import * as mutations from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      page: {},
      pageNumber: 1
    },
    mutations: {
      [mutations.NEXT_QURAN_PAGE] (state) {
        state.page++
      },

      [mutations.PREVIOUS_QURAN_PAGE] (state) {
          state.page--;
      }
    },

    actions: {
        async getQuranPage({ commit, state}) {
            let page = this.$route.params.page;
            let response = await this.axios.get(QURAN_PAGE_API({page}));
            console.log(state.page = response.data.data);

        }
    }
  })