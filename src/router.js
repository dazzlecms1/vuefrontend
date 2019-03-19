import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('./views/Brands.vue'),
    },
    {
      path: '/brands/:brand',
      name: 'Brand',
      component: () => import('./views/Brand.vue'),
    },
    {
      path: '/brands/:brand/create',
      name: 'create',
      component: () => import('./views/Create.vue'),
    },
    {
      path: '/brands/:brand/:template',
      name: 'Template',
      component: () => import('./views/Template.vue'),
    },
    {
      path: '/brands/:brand/:template/:site',
      name: 'Site',
      component: () => import('./views/Site.vue'),
    },
    {
      path: '/brands/:brand/:template/:site/edit',
      name: 'Edit',
      component: () => import('./views/Edit.vue'),
    },
    // {
    //   path: '/books',
    //   name: 'Books',
    //   component: () => import('./Books/Books.vue'),
    // },
    // {
    //   path: '//:id',
    //   name: 'Book',
    //   component: () => import('./Books/Book.vue'),
    // },
    
   

      
      // beforeEnter(to, from, next) {
      //   store.commit('ideas/notification', {show: false, text: ''})
      //   next();
      // }
    
  ],
});
