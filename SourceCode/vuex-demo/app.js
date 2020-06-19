import Vue from 'vue'
// regular vuex
import store from './vuex/store'
import App from './components/App.vue'

// 
// import store from './vuex-module/store';
// import App from './components/App.Module.vue'

new Vue({
  store,
  el: 'body',
  components: { App }
})