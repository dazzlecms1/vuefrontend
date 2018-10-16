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
      commit('loading', true);
      await delay(1000);
      const res = await api.post('/features', {name, description});
      if(res.status === 200) {
        console.log(res.data);
        commit('loading', false);
        commit('redirect', true);
        commit('notification', {show: true, text: res.data.name})
      }
    },
  },
  getters: {
    features: state => state.features,
    notification: state => state.notification,
  }
}

export default todos;