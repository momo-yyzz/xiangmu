<template>
  <div id="app">
    <section class="todoapp" id="app">
      <headera  @add="addTodoHandle"></headera>
      <sectiona :list="list"></sectiona>
      <footera></footera>
    </section>
  </div>
</template>

<script>
import headera from './components/header'
import sectiona from './components/section'
import footera from './components/footer'

// 数据
let data = [
  {
    id: Date.now() + Math.random(),
    title: '这是假数据1',
    checked: false
  },
  {
    id: Date.now() + Math.random(),
    title: '这是假数据2',
    checked: true
  }
]

export default {
  data () {
    return {
      list: data
    }
  },
 components:{
   headera,
   sectiona,
   footera
 },
  methods: {
    addTodoHandle (message) {
      console.log('父级',message)
      this.list.push({
        id: Math.random(),
        title: message,
        checked:false
      })
    }
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
