import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todos',
      component: () => import('./views/Todos/Todos.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Todos/Create.vue'),
    },
    {
      path: '/todos/:id',
      name: 'OneTodo',
      component: () => import('./views/Todos/OneTodo.vue'),
    },
    // Learn
    {
      path: '/learn',
      name: 'Learn',
      component: () => import('./views/Learn/Learn.vue'),
    },
    {
      path: '/learn/createWord',
      name: 'createWord',
      component: () => import('./views/Learn/createWord.vue'),
    },
    {
      path: '/learn/list',
      name: 'list',
      component: () => import('./views/Learn/List.vue'),
    },
    {
      path: '/learn/createSentence',
      name: 'createSentence',
      component: () => import('./views/Learn/createSentence.vue'),
    },
    {
      path: '/learn/:id',
      name: 'Exercise',
      component: () => import('./views/Learn/Exercise/Exercise.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test.vue'),
    },
  ],
});
