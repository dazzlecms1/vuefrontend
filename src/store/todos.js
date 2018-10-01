import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
    todos: [],
    oneTodo: {},
    loading: false,
    redirect: false
  },
  mutations: {
    getAll(state, val) {
      state.todos = val;
    },
    getOne(state, val) {

    },
    loading(state, bool) {
      state.loading = bool;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
  },
  actions: {
    async create({commit}, {text, category}) {
      console.log('create', text, category);
      // start loading
      commit('loading', true);
      await delay(200);
      const res = await api.post('/todo', {text, category});
      if(res.status === 200) {
        commit('redirect', true);
      }
      commit('loading', false);
      // stop loading
    },
    async getAll({commit}) {
      console.log('get all todos action');
      const res = await api.get('/todo');
      if(res.status === 200) {
        commit('getAll', res.data);
      } else {
        console.log('get all error')
      }
    },
    async getOne({commit}, {}) {
      commit('getOne');
    }
  },
  getters: {
    loading: state => state.loading,
    redirect: state => state.redirect,
  }
}

export default todos;