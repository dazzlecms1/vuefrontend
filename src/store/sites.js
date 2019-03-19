import api from '@/common/api';
import axios from 'axios';


const ideas = {
  namespaced: true,
  state: {     
    sites: [],
    brands: [],
    templates: [],
    currentBrand: null,
    rooter: {
      refresh: false,
    }
  },
  mutations: {
    setAllBrands(state, brands) {
      state.brands = brands;
    },
    setAllSites(state, sites) {
      state.sites = sites;
    },
    setAllTemplates(state, templates) {
      state.templates = templates;
    },
    changePageStatus(state, modifiedPage) {
      state.sites.map(s => {
        if(s._id === modifiedPage._id) {
          return modifiedPage;
        }
        return s;
      })
    },
    setCurrentBrand(state, currentBrand) {
      state.currentBrand = currentBrand;
    },
    toggleRefresh(state, bool) {
      state.rooter.refresh = bool;
    }
  },
  actions: {
    async getAllBrands({commit}) {
      console.log('getAllBrands action.');
      const res = await api.get('/brands');
      commit('setAllBrands', res.data)
    }, 
    async getAllSites({commit}) {
      console.log('getAllSites action.');
      const res = await api.get('/sites');
      commit('setAllSites', res.data)
    }, 
    async getAllTemplates({commit}) {
      console.log('getAllTemplates action.');
      const res = await api.get('/templates');
      commit('setAllTemplates', res.data)
    }, 
    async changePageStatus({commit}, {site, status}) {
      console.log(site._id, status);
      const res = await api.put(`/sites/${site._id}`, {status});
      commit('changePageStatus', res.data);
    },
    async createSite({commit}, data) {
      if(data.title.length > 2) {
        console.log(data)
        const res = await api.post('/sites', data);
        console.log(res.data)
        commit('toggleRefresh', true)
      } else {
        console.log('title too short')
      }
    },
    async publish({commit}, page) {
      const res = await api.put('/sites/' + page._id, {
        status: 'published',
        compliance: 'approved',
      });
      console.log(res.data)
    },
    async update({commit}, {site, title}) {
      if(title.length > 2) {
        const res = await api.put('/sites/' + site._id, {title});
        console.log(res.data)
      }
    },
    async deletePage({commit}, {id}) {
      const res = await api.put('/sites/' + id, {
        status: 'deleted',
        compliance: 'rejected',
      })
      console.log(res.data)
    },
    async archivePage({commit}, {id}) {
      const res = await api.put('/sites/' + id, {
        status: 'archived',
        compliance: 'rejected',
      })
      console.log(res.data)
    },
    async login({commit}) {
      console.log('login')
    }
  },
  getters: {
    brands: state => state.brands,
    sites: state => state.sites,
    templates: state => state.templates,
  }
}

export default ideas;