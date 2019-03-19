import Vue from 'vue'
import Vuex from 'vuex'

import sites from './sites';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sites,
  },
  state: {

  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  }
})