// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import config from '@/config'

Vue.use(BootstrapVue)

Vue.prototype.$http = require('axios').create({
  baseURL: config.base_url,
  config: {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    crossDomain: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
