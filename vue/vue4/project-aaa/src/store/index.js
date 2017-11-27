
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
      gitDataAction(store){
          Axios.get('http://172.20.10.5:8080/info')
          .then(function (params){
              console.log(params.data.data)
              store.commit('changeList',{
                  list:params.data.data
              })
          })
      }
  }
})

export default store