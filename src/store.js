import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { QURAN_PAGE_API, QURAN_EDITIONS_API } from '../config/config';
import * as mutations from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      page: {},
      translatedPage: {},
      pageNumber: 1,
      edition: 'en.asad', 
      isTranslated: false,
      editions: []
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
      },

      setQuranEditions: (state, editions) => {
        state.editions = editions;
      },

      setCurrentEdition: (state, edition) => {
        state.edition = edition;
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
      },

      getEditions(state) {
        return state.editions
      }
    },

    actions: {
        async getQuranPage({ commit, state}, {page = state.pageNumber, edition = null}) {
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
        },

        async getQuranEditions({ commit }) {
          let response = await axios.get(QURAN_EDITIONS_API({})); 
          commit('setQuranEditions', response.data.data)
        }
    }
  })