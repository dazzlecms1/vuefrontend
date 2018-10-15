import Vue from 'vue'
import Vuex from 'vuex'

import features from './features';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    features
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