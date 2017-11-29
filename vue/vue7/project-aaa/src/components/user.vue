<template>
  <div>
      我是user页面
      <hr>
      <router-link to="/user/11">11</router-link>
      <router-link to="/user/22">22</router-link>
      <router-link to="/user/33">33</router-link>
      <router-link to="/user/44">44</router-link>
      <hr>
      <p>这里展示人物信息</p>
  </div>
</template>
<script>
    
    export default {
        watch: {
            //写上要监控的当前的这个实例身上的属性
            '$route':function (){ //当属性的值发生变化，就会执行后面的函数
                console.log(this.$route)
            }
        },
        mounted () {
            console.log(this.$route)
            console.log(this.users)
            console.log('挂载完成')
        }
    }
</script>

