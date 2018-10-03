import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {  
    currentSentence: '',   
    exercises: [
      {_id: 1, type: 'pawn'},
      {_id: 2, type: 'knight'},
      {_id: 3, type: 'bishop'},
      {_id: 4, type: 'rook'},
      {_id: 5, type: 'queen'},
      {_id: 6, type: 'king'},
    ],
    pawnExercises: [
      { _id: 1, 
        verbs: ['ser', 'encantar', 'escribir', 'leer', 'rechazar', 'elegir'], 
        nouns: ['mesa', 'madera', 'profesora', 'libro', 'obrero', 'juego', 'carta', 'dia', 'periodico'], 
        sentences: [
          {_id: 1, shown: true, text: 'La mesa es de madera.'},
          {_id: 2, shown: false, text: 'Ella es una profesora de español'},
          {_id: 3, shown: false, text: 'El libro es muy interesante'},
          {_id: 4, shown: false, text: 'Soy obrero'},
          {_id: 5, shown: false, text: 'Te encanta jugar juegos'},
          {_id: 6, shown: false, text: 'Les encanta escribir cartas'},
          {_id: 7, shown: false, text: 'Leemos el periodico todos los dias'},
          {_id: 8, shown: false, text: 'El Gobierno rechaza el ultimátum'},
          {_id: 9, shown: false, text: 'Elegimos un nuevo líder'},
          {_id: 10,shown: false, text: 'Vosotros no les encanta la profesora nueva'},
        ],

      }
    ]
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    exercises: state => state.exercises,
    pawnExercises: state => state.pawnExercises,
  }
}

export default todos;