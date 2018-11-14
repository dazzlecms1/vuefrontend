import api from '@/common/api';

const books = {
  namespaced: true,
  state: {     
    books: [],
    search: '',
    book: [],
  },
  mutations: {
    search(state, search) {
      state.search = search;
    },
    getAll(state, books) {
      state.books = books;
    },
    getBook(state, book) {
      state.book = book;
    },
  },
  actions: {
    async getAll({commit}) {
      const res = await api.get('/books');
      if(res.status === 200) {
        commit('getAll', res.data);
      }
    },
    async getBook({commit}, {id}) {
      const res = await api.get('/books/' + id);
      if(res.status === 200) {
        commit('getBook', res.data);
      }
    },
    async createBook({dispatch}, {title}) {
      const res = await api.post('/books', {title})
      if(res.status === 200) {
        await dispatch('getAll');
      }
    },
    async removeBook({dispatch}, {id}) {
      const res = await api.delete('/books/' + id);
      if(res.status === 200) {
        await dispatch('getAll');
      }
    },
  },
  getters: {
    books: state => state.books,
    search: state => state.search,
    book: state => state.book,
  }
}

export default books;