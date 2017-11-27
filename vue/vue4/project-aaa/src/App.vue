<template>
  <div id="app">
    {{num}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: this.$store.state.n //定义的key值的初始值是从vuex中拿到的
      }
    },
    methods: {
      changeStateValue () {

        //this.num = 10000;只是改变了本组件的data中的值
        //this.$store.state.n = 10000;

        /* this.$store.commit('changeN',{
          k: ++this.val
        }) */

        //派发一个action
        this.$store.dispatch('changeNAction',{
          k: ++this.val
        })
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
