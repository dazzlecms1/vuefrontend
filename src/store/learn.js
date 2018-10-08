import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {  
    sentences: [],
    currentSentence: {
      sentence: [],
      words: [],
    },
    search: '',
    words: [],
    filter: '',
    modalClass: 'modal',
    updatedWord: [],
    currentWord: [],
    sidebar: [],
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
    setCurrentWord(state, word) {
      state.currentWord = word;
    },
    sidebar(state, {word, operation}) {
      if(operation === 'add') {
        // check if item is already there;
        if(!state.sidebar.find(w => w._id === word._id)){ // item is not there
          // push
          state.sidebar.push(word);
        }
      } else if(operation === 'remove') {
        if(state.sidebar.find(w => w._id === word._id)){ // item is there
          // remove
          state.sidebar = state.sidebar.filter(w => w._id !== word._id);
        }
      }
    }, // add and remove words from the sidebar
    setCurrentSentence(state, {sentence}) {
      state.currentSentence.sentence = sentence;
    },
    moveWord(state, {word, operation}) {
      if(operation === 'toSentence') {
        if(!state.currentSentence.words.find(w => w._id === word._id)) {
          state.currentSentence.words.push(word);
        }
      } else if(operation === 'toSidebar') {
        if(state.currentSentence.words.find(w => w._id === word._id)) {
          // remove
          state.currentSentence.words = state.currentSentence.words.filter(w => w._id !== word._id);
        }
      }
    }
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
    }, // fixed for word
    async loadWord({commit}, {id}) {
      const res = await api.get('/word/' + id);
      if(res.status === 200) {
        commit('setCurrentWord', res.data);
      }
    },
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
    currentWord: state => state.currentWord,
    sidebar: state => state.sidebar,
    currentSentence: state => state.currentSentence,
  }
}

export default todos;