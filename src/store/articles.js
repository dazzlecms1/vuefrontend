import api from '@/common/api';


const articles = {
  namespaced: true,
  state: {     
    articles: [],
    filter: '',
  },
  mutations: {
    getArticles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    
    // https://www.reddit.com/search.json
    // q 
    // limit default 25, max 100
    // sort -> relevance, hot, top, new, comments
    // t -> hour, day, week, month, year, all

    async getArticles({commit}) {
      const res = await api.get('/articles');
      if(res.status === 200) {
        commit('getArticles');
      }
    }


  },
  getters: {
    artices: state => state.articles,
  }
}

export default articles;