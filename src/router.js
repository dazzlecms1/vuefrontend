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
      path: '/features/:id',
      name: 'OneFeature',
      component: () => import('./views/OneFeature.vue'),
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('./views/Create.vue'),
      beforeEnter(to, from, next) {
        store.commit('features/notification', {show: false, text: ''})
        next();
      }
    },
  ],
});
