import api from '@/common/api';
import axios from 'axios';


const ideas = {
  namespaced: true,
  state: {     
    sites: [],
    brands: [],
    templates: [],
    currentBrand: null,
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
    
    // comments
    async addComment({commit, state, dispatch}, {comment}) {
      // const res = await api.post('/comments', {text: comment, idea: state.commentModal.id})
      // if(res.status === 200) {
      //   commit('commentModal', {active: false, id: []});
      //   dispatch('getAll');
      // }
    }, 
    async deleteComment({dispatch}, {id}) {
      // const res = await api.delete('/comments/' + id);
      // if(res.status === 200) {
      //   dispatch('getAll');
      // }
    }, 
    // progress
    async setProgress({dispatch}, {val, id}) {
      // const res = await api.put(`/ideas/${id}`, {progress: val});
      // if(res.status === 200) {
      //   dispatch('getAll');
      // }
    }, 
    // archive
    async addToArchive({dispatch}, {id}) {
      // const res = await api.put(`/ideas/${id}`, {archived: true});
      // if(res.status === 200) {
      //   dispatch('getAll');
      // }
    }, 

    async setPriority({dispatch, state}, {id, priority}) {
      // let findCurrent = state.ideas.find(i => i.priority === 'current');
      
      // if(findCurrent) {
      //   const currentIdea = await api.get('/ideas?priority=current');
      
      //   await api.put('/ideas/' + currentIdea.data[0]._id, {priority : 'high'});
      // }

      // const res = await api.put('/ideas/' + id, {priority});
      //   if(res.status === 200) {
      //     dispatch('getAll');
      //   }

    },
    // genre
    async setGenre({dispatch, state}, {id, genre}) {
      // console.log(id, genre);

      // const res = await api.put('/ideas/' + id, {genre});
      //   if(res.status === 200) {
      //     dispatch('getAll');
      //   }
    },

  },
  getters: {
    brands: state => state.brands,
    sites: state => state.sites,
    templates: state => state.templates,
    // ideas: state => state.ideas.filter(idea => {
      
    //   if(state.filter === '') {
    //     return idea;
    //   } else {
    //     return idea.priority === state.filter && idea.genre === state.genreFilter;
    //   }
    // }),
    // showCommentModal: state => state.commentModal.active,
    // showQuickAddModal: state => state.quickAddModal.active,
    // filter: state => state.filter,
    // genreFilter: state => state.genreFilter,
  }
}

export default ideas;