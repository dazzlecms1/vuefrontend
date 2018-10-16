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
      name: 'features',
      component: () => import('./views/Features.vue'),
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('./views/Create.vue'),
      beforeEnter(to, from, next) {
        console.log('before enter Create.vue')
        store.commit('features/notification', {show: false, text: ''})
        next();
      }
    },
  ],
});
