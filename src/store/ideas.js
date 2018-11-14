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
    genreFilter: '',
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
    setFilter(state, {filter, type}) {
      if(type === 'priority'){
        state.filter = filter;
      } else if (type === 'genre') {
        state.genreFilter = filter;
      }
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

    }, 
    async deleteIdea({dispatch}, {id}) {
      const res = await api.delete('/ideas/' + id);
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, 
    async quickAddIdea({dispatch, commit}, {idea, genre}) {
      let progress = 0; // only for minutes.
      
      if (idea[13].charCodeAt(0) === 46) {
        
        progress = Math.trunc((+idea.substring(31))/60);
        idea = "https://www.youtube.com/watch?v=" + idea.substr(17, 11);
        
      } else if (idea.length === 43) {

        idea = idea.substring(0, 43);

      } else if (idea[44] === 't') {

        progress = +idea.substring(46, idea.indexOf('m', 46));
        idea = idea.substring(0, 43);

      } else if (idea[44] === 'f') {
        
        idea = idea.substring(0, 43);

      } else {
        return console.log('dont know what is going on up here. ')
      }
      
       

      const res = await api.post('/ideas', {idea, progress, genre});
    
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
    }, 
    async deleteComment({dispatch}, {id}) {
      const res = await api.delete('/comments/' + id);
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, 
    // progress
    async setProgress({dispatch}, {val, id}) {
      const res = await api.put(`/ideas/${id}`, {progress: val});
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, 
    // archive
    async addToArchive({dispatch}, {id}) {
      const res = await api.put(`/ideas/${id}`, {archived: true});
      if(res.status === 200) {
        dispatch('getAll');
      }
    }, 
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
    // genre
    async setGenre({dispatch, state}, {id, genre}) {
      console.log(id, genre);

      const res = await api.put('/ideas/' + id, {genre});
        if(res.status === 200) {
          dispatch('getAll');
        }
    },

    // test
    async test() {
      console.log('emtpy test fn');
      // const res = await api.get('/ideas?archived=false')
      // let arr = [];
      // arr = res.data;
      // for (let i = 0; i < arr.length; i ++ ) {
      //   let id = arr[i]['id'];
      //   await api.put('/ideas/' + id, {genre: 'sport'})
      // }
    }

  },
  getters: {
    ideas: state => state.ideas.filter(idea => {
      
      if(state.filter === '') {
        return idea;
      } else {
        return idea.priority === state.filter && idea.genre === state.genreFilter;
      }
    }),
    showCommentModal: state => state.commentModal.active,
    showQuickAddModal: state => state.quickAddModal.active,
    filter: state => state.filter,
    genreFilter: state => state.genreFilter,
  }
}

export default ideas;