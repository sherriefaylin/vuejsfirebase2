// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import App from './App'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

require('./App.vue').default

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },


  
})

// Vue.component('secrets', {

//   template: `<div id="app">
//    <div v-for="secret in secrets">{{secrets.secret}}
//    </div>
// </div>`
// })
