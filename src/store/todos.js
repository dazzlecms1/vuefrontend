import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
    todos: [],
    categories: ['all', 'improve', 'sport', 'food', 'learn', 'enjoy'],
    count: 0,
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
    getCount(state, count) {
      state.count = count;
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
    },
    // comments
    addComment({oneTodo}, val) {
      
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
      // get todos count
      const count = await api.get('/todo/count');
      if(res.status === 200) {
        commit('getCount', count.data);
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
    },
    async addComment({commit, state}, {commentText}) {

      console.log('comment', commentText);
      console.log(state.oneTodo._id);

      const res = await api.post('/comment', {comment: commentText, todo: state.oneTodo._id});

      if(res.status === 200) {
        commit('addComment', res.data);
      }
    },
    async deleteComment({commit, state}, {id}) {
      console.log(id);
    }
  },
  getters: {
    todos: (state) => {
      if(state.filter === 'all') {
        return state.todos
      } else {
        return state.todos.filter(todo => todo.category === state.filter);
      }
    },
    loading: state => state.loading,
    redirect: state => state.redirect,
    search: state => state.search,
    oneTodo: state => state.oneTodo,
    count: state => state.todos.length,
    categories: state => state.categories
  }
}

export default todos;