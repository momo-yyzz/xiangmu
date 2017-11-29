import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import Miaov from '../components/miaov'
import NotFound from '../components/NotFound'

import Vip from '../components/vip'
import Vip1 from '../components/vip1'
import Vip2 from '../components/vip2'

//构造函数配置
let router = new VueRouter({
  mode:'history',
  routes:[  //配置路由
    { //每一个对象都是路由信息
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    { 
      path:'/miaov',
      name:'miaov',
      component:Miaov,
      children: [  //子路由
          {
            path:'vip',
            name:'Vip',
            component:Vip
          },
          {
            path:'vip1',
            name:'Vip1',
            component:Vip1
          },
          {
            path:'vip2',
            name:'Vip2',
            component:Vip2
          },{  //二级页面找不到
            path:'*',
            redirect: {
              name:'NotFound'
            }
          }
      ]
    },
    { 
      path:'/NotFound',
      name:'NotFound',
      component:NotFound
    },
    { 
      path:'/miaov/vip',
      name:'vip',
      component:Vip
    },
    { 
      path:'*',
      //component:NotFound 显示404
      //重定向
      //redirect:'/home'
      /* redirect:{
          path: '/home',
          query: {
            a:1
          }
      } */
      redirect:function (to) {  //动态返回重定向

        if (to.path === '/abc'){
          return '/home'
        }else if(to.path === '/miaov1'){
          return {
            name:'about'
          }
        }else{  //一级页面找不到
          return '/NotFound'
        }
      }
    }
  ]
})

export default router
