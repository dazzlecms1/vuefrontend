import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos';
import learn from './learn';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos, learn
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