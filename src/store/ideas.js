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
    // oneFeature: [],
    // oneComment: [],
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

    // removeOne(state, feature) {
    //   state.ideas = state.ideas.filter(i => i._id !== feature._id)
    // },
    // getOne(state, feature) {
    //   state.oneFeature = feature;
    // },
    
    // setOneComment(state, comment) {
    //   state.oneComment = comment;
    // },
    // removeOneComment(state, comment) {
    //   state.oneFeature.comments = state.oneFeature.comments.filter(c => comment._id !== c._id)
    // },
    // editOneComment(state, comment) {
    //   const index = state.oneFeature.comments.findIndex(c => c._id === comment._id);
    //   console.log(state.oneFeature.comments[index]);
    //   state.oneFeature.comments[index] = comment;
    //   console.log(state.oneFeature.comments[index]);
    // }
  },
  actions: {
    // async create({commit}, {name, description}) {
    //   commit('loading', true); // start loading
    //   await delay(1000);       // 1 sec delay for loading animation to show
    //   const res = await api.post('/ideas', {name, description});
    //   if(res.status === 200) { // is success
    //     commit('loading', false); // reset loading
    //     commit('redirect', true); // redirect true
    //     commit('notification', {show: true, text: res.data.name}) // notification show
    //   }
    // },
    async getAll({commit}) {
      const res = await api.get('/ideas?archived=false');
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

      // remain
      /*
      * archived
      * category
      * createdAt
      * finished
      * progress
      * archived is by default
      *
      */

      // changed
      // author -> video.snippet.channelTitle
      // duration -> video.contentDetails.duration (transform with $moment)
      // name -> video.snippet.title
      // 

      // new
      // channelId
      // publishedAt
      // thumbnails

    }, // good
    async deleteIdea({dispatch}, {id}) {
      const res = await api.delete('/ideas/' + id);
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, // good

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

    // test youtube api
    async ytTest() {
      

      
    }

    // async remove({commit}, {id}) {
    //   commit('loading', {value: true, button: id});
    //   await delay(800);
    //   const res = await api.delete('/ideas/' + id);
    //   if(res.status === 200) {
    //     commit('removeOne', res.data);
    //   }
    //   commit('loading', {value: false, button: ''});
      
    // },
    // async getOne({commit}, {id}) {
    //   const res = await api.get('/ideas/' + id);
    //   if(res.status === 200) {
    //     commit('getOne', res.data);
    //   }
    // },
    // async update({commit, state}, {element, value}) {
    //   const res = await api.put('/ideas/' + state.oneFeature._id, {[element]: value});
    //   if(res.status === 200) {
    //     commit('getOne', res.data);
    //   }
    // },

    // async editComment({commit, state}, {editValue}) {
    //   const res = await api.put('/comments/' + state.oneComment._id, {comment: editValue});
    //   if(res.status === 200) {
    //     commit('editOneComment', res.data);
    //   }
    // },

  },
  getters: {
    ideas: state => state.ideas,
    showCommentModal: state => state.commentModal.active,
    // redirect: state => state.redirect,
    // loading: state => state.loading,
    // oneFeature: state => state.oneFeature,
  }
}

export default ideas;