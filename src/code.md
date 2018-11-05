
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