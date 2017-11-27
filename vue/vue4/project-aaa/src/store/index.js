
import Vue from 'vue'
import Vuex from 'Vuex'


Vue.use(Vuex)

let store = new Vuex.Store({
  // 定义应用的状态
  state: {
    n: 0
  },
  mutations: {
      changeList(state,payload){ //{list:[]}
          state.list = payload.list;
      }
  },
  actions: {
      changeAction(store,paylod){
          //写关于改变状态n的异步操作
          setTimeout(() =>{
              let o = {
                k: paylod.k +1000
              }
              store.commit('changeN', o)
          },1000);
      }
  }
})

export default store