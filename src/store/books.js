import api from '@/common/api';

const ideas = {
  namespaced: true,
  state: {     
    characters: [
      {_id: 1, name: 'sven', active: true, info: 'sven info'},
      {_id: 2, name: 'lich', active: false, info: 'lich info'},
      {_id: 3, name: 'mirana', active: false, info: 'mirana info'},
      {_id: 4, name: 'bloodseeker', active: false, info: 'bloodseeker info'},
      {_id: 5, name: 'earthshaker', active: false, info: 'earthshaker info'},
      {_id: 6, name: 'treant', active: false, info: 'treant info'},
      {_id: 7, name: 'riki', active: false, info: 'riki info'},
      {_id: 8, name: 'tiny', active: false, info: 'tiny info'},
    ],
    activeNav: {
      main: null,
      secondary: null,
    },
    books: [
      {
        _id: 'book1', 
        name: 'The-Year-of-Less-How-I-Stopped-Shopping-Gave-Away-My-Belongings-and-Discovered-Life-Is-Worth-More-Than-Anything-You-Can-Buy-in-a-Store',
        characters: [
          {_id: 'book1char1', name: 'Wendy', info: 'friend'},
          {_id: 'book1char2', name: 'Liz', info: 'friend'},
        ]
      }
    ]
  },
  mutations: {
    search(state, val) {
      state.search = val;
    },
    selectCharacter(state, {id}) {
      state.characters = state.characters.map(c => {
        // toggle old
        if(c.active) {
          c.active = false;
        }

        // toggle new        
        if(c._id === id) {
          c.active = true; 
        }

        return c;
      });
    }
  },
  actions: {
    async add({commit}, {name}) {
      console.log(name);
    }

  },
  getters: {
    search: state => state.search,
    characters: state => state.characters,
    selectedCharacter: state => state.characters.filter(c => c.active)[0],
    activeNav: state => state.activeNav,
  }
}

export default ideas;