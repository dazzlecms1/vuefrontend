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
    notification: {
      show: false,
      text: 'default text',
    }
  },
  mutations: {
    loading(state, bool) {
      state.loading.value = bool;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    getAll(state, val) {
      state.features = val;
    },
    notification(state, {show, text}) {
      console.log('notification');
      state.notification.show = show; 
      state.notification.text = text; 
    }
  },
  actions: {
    async create({commit}, {name, description}) {
      commit('loading', true); // start loading
      await delay(1000);       // 1 sec delay for loading animation to show
      const res = await api.post('/features', {name, description});
      if(res.status === 200) { // is success
        commit('loading', false); // reset loading
        commit('redirect', true); // redirect true
        commit('notification', {show: true, text: res.data.name}) // notification show
      }
    },
    async getAll({commit}) {
      const res = await api.get('/features');
      if(res.status === 200) {
        commit('getAll', res.data);
      }
    },
    async remove({commit}, {id}) {
      commit('loading', {value: true, button: id});
      await delay(2200);

      commit('loading', {value: false, button: ''});
      // const result = await api.delete('/todo/' + id);
      // if(result.status === 200) {
      //   commit('deleteTodo', id);
        
      // }
    }
  },
  getters: {
    features: state => state.features,
    notification: state => state.notification,
    redirect: state => state.redirect,
  }
}

export default todos;