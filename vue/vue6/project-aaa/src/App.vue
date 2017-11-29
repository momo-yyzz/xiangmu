<template>
  <div id="app">
    <ul>
      <li>
        <router-link exact to="/">home</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link  to="/miaov">miaov</router-link>
        <ul>
          <li>
             <!-- <router-link to="/miaov/vip">VIP</router-link> -->
             <router-link :to="{name:'Vip'}">VIP</router-link>
          </li>
          <li>
             <!-- <router-link to="/miaov/vip1">VIP1</router-link> -->
             <router-link :to="{name:'Vip1'}">VIP1</router-link>
          </li>
          <li>
             <!-- <router-link to="/miaov/vip2">VIP2</router-link> -->
             <router-link :to="{name:'Vip2'}">VIP2</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <p>下面的标签是vue-router提供的，告诉匹配的路径,把组件应该渲染在这个位置</p>
    <button @click="tab">Home</button>
    <button @click="tab2">About</button>
    <button @click="tab3">Miaov</button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods:{
      tab(){
        window.location.hash = '/home';
      },
      tab2(){
        window.location.hash = '/about';
      },
      tab3(){
        window.location.hash = '/miaov';
      }
    }
  }
</script>

<style>
.router-link-active{
  background: red;
  color: #fff;
}

.router-link-exact-active{
  background: blueviolet;
  color: #fff;
}
</style>
