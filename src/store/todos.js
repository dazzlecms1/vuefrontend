import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
    todos: [],
    oneTodo: {},
    loading: false,
    redirect: false,
    search: '',
    limit: 10,
    filter: 'all', // active completed // improve sport food learn enjoy
  },
  mutations: {
    getAll(state, val) {
      state.todos = val;
      state.limit += 10;
    },
    loadMore(state, val) {
      state.todos.concat(val);
      state.limit += 10;
    },
    getOne(state, val) {
      state.oneTodo = val;
    },
    loading(state, bool) {
      state.loading = bool;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex(el => el._id === todoId);
      state.todos.splice(index, 1);
    },
    search(state, searchVal) {
      state.search = searchVal;
    },
    updateTodo(state, val) {
      state.oneTodo = val;
    },
    setActiveFilter(state, filter) {
      state.filter = filter;
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
    async getAll({commit, state}) {
      console.log('get all todos action');
      const res = await api.get('/todo?_start=' + state.start + '&_limit=10');
      if(res.status === 200) {
        commit('getAll', res.data);
      } else {
        console.log('get all error')
      }
    },
    async loadMore({commit, state}) {
      console.log('load more');
      const res = await api.get('/todo?_start=0&_limit=' + state.limit);
      if(res.status === 200) {
        commit('getAll', res.data);
      } else {
        console.log('get all error')
      }
    },
    async getOne({commit}, {id}) {  

      const res = await api.get('/todo/' + id);
      if(res.status === 200) {
        commit('getOne', res.data);
        commit('redirect', true);
      } else {
        console.log('error with get one todo action');
      }
    },
    async deleteTodo({commit}, {id, fromOneTodo}) {
      commit('loading', true);
      await delay(200);

      const result = await api.delete('/todo/' + id);
      if(result.status === 200) {
        commit('deleteTodo', id);
        if(fromOneTodo) {
          commit('getOne', {});
        }
      }
      
      commit('loading', false);
    },
    async updateTodo({commit, state}, {text, category}) {
      console.log('updateTodo action', text, category);
      commit('loading', true);
      await delay(200);
      const res = await api.put('/todo/' + state.oneTodo._id, {text, category});
      if(res.status === 200) {
        commit('updateTodo', res.data);
      }
      commit('loading', false);
    }
  },
  getters: {
    todos: (state) => {
      switch(state.filter) {
        case 'improve':
          return state.todos.filter(todo => todo.category === 'improve');
        case 'sport':
          return state.todos.filter(todo => todo.category === 'sport');
        case 'food':
          return state.todos.filter(todo => todo.category === 'food');
        case 'learn':
          return state.todos.filter(todo => todo.category === 'learn');
        case 'enjoy':
          return state.todos.filter(todo => todo.category === 'enjoy');
        default: return state.todos;
      }
    },
    loading: state => state.loading,
    redirect: state => state.redirect,
    search: state => state.search,
    oneTodo: state => state.oneTodo,
    count: state => state.todos.length
  }
}

export default todos;