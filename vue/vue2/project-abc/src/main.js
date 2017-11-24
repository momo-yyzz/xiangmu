// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* Vue.use(Vuex)

//创建store
let store = new Vuex.Store({
  //定义应用的状态
  state: {
    n: 0
  },
  mutations: {
    //定义改变n的函数
    changeStateN (state,abc) {
      console.log(111)
      state.n = abc;
    }
  }
}) */

Vue.config.productionTip = false
import './assets/css/app.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
