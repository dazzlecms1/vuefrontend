import Vue from 'vue'
import Vuex from 'vuex'

import ideas from './ideas';
import articles from './articles';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ideas, articles,
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