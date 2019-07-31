import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { QURAN_PAGE_API } from '../config/config';
import * as mutations from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      page: {},
      translatedPage: {},
      pageNumber: 1,
      edition: 'en.asad', 
      isTranslated: false
    },
    mutations: {
      setPageNumber: (state, pageNumber) => {
        state.pageNumber = pageNumber
      },

      setPage: (state, page) => {
        state.page = page;
      },

      setTranslatedPage: (state, translatedPage) => {
        state.translatedPage = translatedPage;
      },

      setIsTranslated: (state, isTranslated) => {
        state.isTranslated = isTranslated;
      }
    },

    getters: {
      getCurrentPage(state) {
        return state.pageNumber
      },

      getTranslatedPage(state) {
        return state.translatedPage
      },

      getCurrentEdition(state) {
        return state.edition
      },

      getIstranslated(state) {
        return state.isTranslated
      }
    },

    actions: {
        async getQuranPage({ commit, state}, {page, edition = null}) {
          commit('setPageNumber', page);

          if (!edition) {
            let response = await axios.get(QURAN_PAGE_API({ page })); 
            commit('setPage', response.data.data)
            commit('setIsTranslated', false)
          } else {
            let response = await axios.get(QURAN_PAGE_API({page, edition})); 
            commit('setTranslatedPage', response.data.data)
            commit('setIsTranslated', true)
          }
        }
    }
  })