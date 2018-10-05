import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {  
    exercises: [
      {_id: 1, type: 'pawn'},
      {_id: 2, type: 'knight'},
      {_id: 3, type: 'bishop'},
      {_id: 4, type: 'rook'},
      {_id: 5, type: 'queen'},
      {_id: 6, type: 'king'},
    ],
    sentences: [],
    search: '',
    words: [],
    filter: '',
    modalClass: 'modal',
    updatedWord: [],
  },
  mutations: {
    load(state, {what, data}) {
      if(what === 'sentence') {
        state.sentences = data;
      } else if (what === 'word') {
        state.words = data;
      } else {
        console.log('load mutation error');
      }
    },
    search(state, val) {
      state.search = val;
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
    showModal(state, {bool, id}) {
      if(bool) {
        state.modalClass += ' is-active';
        state.updatedWord = id;
      } else {
        state.modalClass = 'modal';
        state.updatedWord = [];
      }
    },
  },
  actions: {
    async create({}, {what, name, type, text}) {
      if(what === 'word') {
        const res = await api.post('/word', {name, type});
        console.log(res.data);
      } else if (what === 'sentence') {
        const res = await api.post('/sentence', {text});
        console.log(res.data);
      }
    }, // fixed for word
    async load({commit}, {what}) {
      if (what === 'sentence') {
        const res = await api.get('/sentence');
        commit('load', {what, data: res.data});
      } else if (what === 'word') {
        const res = await api.get('/word');
        commit('load', {what, data: res.data});
      } else {
        console.log('load error.');
      }
    }, // fixed for word
    async deleteWord({}, {id}) {
      const res = await api.delete('/word/' + id);
      console.log(res.data);
    }, // fixed for word
    async updateWord({state}, {name}) {
      const res = await api.put('/word/' + state.updatedWord, {name});
      console.log(res.data);
    } // fixed for word
  },
  getters: {
    words: state => {
      if(state.filter.length > 0) {
        return state.words.filter(w => w.type === state.filter);
      } else {
        return state.words;
      }
    },
    search: state => state.search,
    exercises: state => state.exercises,
    modalClass: state => state.modalClass,
    updatedWord: state => state.updatedWord,
    sentences: state => state.sentences,
  }
}

export default todos;