import api from '@/common/api';

const ideas = {
  namespaced: true,
  state: {     
    search: '',
  },
  mutations: {
    search(state, val) {
      state.search = val;
    },
  },
  actions: {
    

  },
  getters: {
    search: state => state.search,
  }
}

export default ideas;