import Vue from 'vue'
import Vuex from 'vuex'

import ideas from './ideas';
import tv from './tv';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ideas, tv,
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