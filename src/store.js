import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { QURAN_PAGE_API } from '../config/config';
import * as mutations from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      page: {},
      pageNumber: 1
    },
    mutations: {
      setPageNumber: (state, pageNumber) => {
        state.pageNumber = pageNumber
      }
    },

    getters: {
      getCurrentPage(state) {
        return state.pageNumber
      }
    },

    actions: {
        async getQuranPage({ commit, state}, page) {
          commit('setPageNumber', page);

          let response = await axios.get(QURAN_PAGE_API({page}));
            
            console.log(state.page = response.data.data);
        }
    }
  })