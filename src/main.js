// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router.conifg.js'
import './common/css/icon.css'
import './common/css/index.css'
// import axios from 'axios'
window.axios = require('axios')
// import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
