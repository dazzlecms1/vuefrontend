import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
    features: [],
    loading: {
      button: '',
      value: false,
    },
    redirect: false,
  },
  mutations: {
    loading(state, bool) {
      console.log('loading');
      state.loading.value = bool;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    getAll(state, val) {
      state.features = val;
    }
  },
  actions: {
    async create({commit}, {name, description}) {
      commit('loading', true);
      await delay(1000);
      const res = await api.post('/features', {name, description});
      if(res.status === 200) {
        console.log(res.data);
        commit('loading', false);
        commit('redirect', true);
      }
    }
  },
  getters: {
    features: state => state.features,
  }
}

export default todos;