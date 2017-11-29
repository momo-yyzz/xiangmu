import Vue from 'vue'
import VueRouter from 'vue-router'
import HalloWorld from '@/components/HalloWorld'
import User from '@/components/user'

Vue.use(VueRouter)




//构造函数配置
let router = new VueRouter({
  mode:'history',
  routes:[  //配置路由
    { //每一个对象都是路由信息
      path:'/',
      name:'HalloWorld',
      component:HalloWorld
    },
    {
      path:'/user/:id',
      name:'User',
      component:User
    }
  ]
})

export default router;
