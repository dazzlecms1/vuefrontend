import api from '@/common/api';
import axios from 'axios';
const key = `key=${process.env.VUE_APP_YT}`;
const url = `https://www.googleapis.com/youtube/v3/videos?id=`;
const fields = 'fields=items(id,snippet(title,channelId,channelTitle,publishedAt,thumbnails),contentDetails(duration))';
const part = 'part=snippet,contentDetails';


const ideas = {
  namespaced: true,
  state: {     
    ideas: [],
    commentModal: {
      active: false,
      id: [],
    },
    quickAddModal: {
      active: false,
    },
    filter: '', // high low current
  },
  mutations: {
    // ideas
    getAll(state, val) {
      state.ideas = val;
    },
    // comments
    commentModal(state, data) {
      state.commentModal = data;
    },
    // quick add idea modal
    quickAddIdea(state, {active}) {
      state.quickAddModal.active = active;
    }, // in progress

    // set filter
    setFilter(state, {filter}) {
      state.filter = filter;
    },
  },
  actions: {
    // ideas
    async getAll({commit}) {
      const res = await api.get('/ideas?archived=false&_sort=createdAt:desc');
      if(res.status === 200) {

        let ids = res.data.map(item => {
          return item.idea.substring(item.idea.length-11);
        }); // ID array. They have the same length.

        const apiResult = await axios({
          url: `${url}${ids.join(',')}&${key}&${fields}&${part}`,
          method: 'get',
        });
        
        for (let i = 0; i < res.data.length; i ++ ) {
          let item = res.data[i];
          item['video'] = apiResult.data.items[i];
        }

        commit('getAll', res.data);
      }

    }, // good
    async deleteIdea({dispatch}, {id}) {
      const res = await api.delete('/ideas/' + id);
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, // good
    async quickAddIdea({dispatch, commit}, {idea}) {
      let newIdea = idea.substring(0, 43);
      
      const res = await api.post('/ideas', {idea: newIdea})
      
      if(res.status === 200) {
        commit('quickAddIdea', {active: false});
        dispatch('getAll');
      }
      
    },


    // comments
    async addComment({commit, state, dispatch}, {comment}) {
      const res = await api.post('/comments', {text: comment, idea: state.commentModal.id})
      if(res.status === 200) {
        commit('commentModal', {active: false, id: []});
        dispatch('getAll');
      }
    }, // good
    async deleteComment({dispatch}, {id}) {
      const res = await api.delete('/comments/' + id);
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, // good
    
    // progress
    async setProgress({dispatch}, {val, id}) {
      const res = await api.put(`/ideas/${id}`, {progress: val});
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, // good

    // archive
    async addToArchive({dispatch}, {id}) {
      const res = await api.put(`/ideas/${id}`, {archived: true});
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, // good

    // priority
    async setPriority({dispatch, state}, {id, priority}) {
      let findCurrent = state.ideas.find(i => i.priority === 'current');
      
      if(findCurrent) {
        const currentIdea = await api.get('/ideas?priority=current');
      
        await api.put('/ideas/' + currentIdea.data[0]._id, {priority : 'high'});
      }

      const res = await api.put('/ideas/' + id, {priority});
        if(res.status === 200) {
          dispatch('getAll');
        }

    },

    // test youtube api
    async ytTest() {
      console.log('yt test');
    },

  },
  getters: {
    ideas: state => state.ideas.filter(idea => {
      if (state.filter === 'high') {
        return idea.priority === 'high'
      } else if (state.filter === 'low') {
        return idea.priority === 'low'
      } else if (state.filter === 'current') {
        return idea.priority === 'current' 
      } else {
        return idea;
      }
    }),
    showCommentModal: state => state.commentModal.active,
    showQuickAddModal: state => state.quickAddModal.active,
    filter: state => state.filter,
    loading: state => state.loading,
  }
}

export default ideas;