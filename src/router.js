import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ideas',
      component: () => import('./views/Ideas.vue'),
    },
    {
      path: '/createIdea',
      name: 'CreateIdea',
      component: () => import('./views/CreateIdea.vue'),
    },
    {
      path: '/ideas/:id',
      name: 'OneIdea',
      component: () => import('./views/OneIdea.vue'),
    },
    
      
      // beforeEnter(to, from, next) {
      //   store.commit('ideas/notification', {show: false, text: ''})
      //   next();
      // }
    
  ],
});
