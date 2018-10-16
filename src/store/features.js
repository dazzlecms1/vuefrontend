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
    },
    oneFeature: [],
  },
  mutations: {
    loading(state, arg) {
      if(typeof arg === 'boolean') {
        state.loading.value = arg;
      } else {
        state.loading = arg;
      }
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    getAll(state, val) {
      state.features = val;
    },
    removeOne(state, feature) {
      state.features = state.features.filter(i => i._id !== feature._id)
    },
    getOne(state, feature) {
      state.oneFeature = feature;
    },
    notification(state, {show, text}) {
      state.notification.show = show; 
      state.notification.text = text; 
    },
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
      await delay(800);
      const res = await api.delete('/features/' + id);
      if(res.status === 200) {
        commit('removeOne', res.data);
      }
      commit('loading', {value: false, button: ''});
      
    },
    async getOne({commit}, {id}) {
      const res = await api.get('/features/' + id);
      if(res.status === 200) {
        commit('getOne', res.data);
      }
    },
    async update({commit, state}, {element, value}) {
      const res = await api.put('/features/' + state.oneFeature._id, {[element]: value});
      if(res.status === 200) {
        commit('getOne', res.data);
      }
    },
    async postComment({commit, state}, {comment}) {
      const res = await api.post('/comments', {comment, feature: state.oneFeature._id})
      if(res.status === 200) {
        console.log(res.data);
      }
    }
  },
  getters: {
    features: state => state.features,
    notification: state => state.notification,
    redirect: state => state.redirect,
    loading: state => state.loading,
    oneFeature: state => state.oneFeature,
  }
}

export default todos;