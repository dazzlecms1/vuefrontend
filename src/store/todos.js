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
      console.log('get one mutation');
    },
    loading(state, bool) {
      state.loading = bool;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex(el => el._id === todoId);
      console.log(state);
      state.todos.splice(index, 1);
      console.log(state);
    }
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
    async getOne({commit}, {id}) {
      console.log('get one todo action', id);
      commit('getOne');
    },
    async deleteTodo({commit}, {id}) {
      console.log('delete todo action',  id);
      commit('loading', true);
      await delay(200);

      const result = await api.delete('/todo/' + id);
      if(result.status === 200) {
        commit('deleteTodo', id)
      }
      commit('loading', false);
    },
  },
  getters: {
    todos: state => state.todos,
    loading: state => state.loading,
    redirect: state => state.redirect,
  }
}

export default todos;