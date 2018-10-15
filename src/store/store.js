import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
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