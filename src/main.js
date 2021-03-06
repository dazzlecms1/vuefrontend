import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ApiService from '@/common/api'


// bulma
import buefy from 'buefy'
import '../node_modules/bulma/css/bulma.css'

// animate.css
import 'animate.css' // not using because i dont know how

// creative link effects

// loading.css
import '@/assets/loading.css'
import '@/assets/loading-btn.css'

// icons
import '@fortawesome/fontawesome-free';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

// moment
import moment from 'moment'

Vue.prototype.moment = moment

ApiService.init();

Vue.use(buefy);

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
  
//   if(from.name === 'OneTodo') {
//     console.log(store.getters['todos/oneTodo']);
//     store.commit('todos/getOne', {})
//     console.log(store.getters['todos/oneTodo']);
//   }

//   next();
  
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
