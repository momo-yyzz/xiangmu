<template>
  <header class="header" >
    <h1>todos</h1>
    <!--输入内容框-->
    <input 
        v-model="message"
        class="new-todo" 
        placeholder="请输入内容" 
        @keydown.13="addTodo"
    />
  </header>
</template>
<script>
 
export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      addTodo () {
        /* 
            $emit(发布的事件名，[传给监听的事件处理函数的参数])
        */
        this.$emit('add', this.message)
      }
    }
  }	

</script>
