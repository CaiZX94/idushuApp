import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
import './assets/css/cssreset.css'
import './assets/css/animate.min.css'
import './assets/font/iconfont.css'
import App from './App.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)

import router from './js/router.js'
//import store from './store/store.js'


new Vue({
  el: '#app',
  render: h => h(App),
	router,
//	store,
})
