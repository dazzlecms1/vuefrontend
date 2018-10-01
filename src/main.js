import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ApiService from '@/common/api'

import buefy from 'buefy'

import '../node_modules/bulma/css/bulma.css'

import '@/assets/loading.css'
import '@/assets/loading-btn.css'

import '@fortawesome/fontawesome-free';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

ApiService.init();

Vue.use(buefy);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
