<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
        <li class="" >
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>miaoweiketang</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  props:['list'],
  computed: {
    len () {
        return this.list.length;
    },
    len () {
        return this.list.length;
    },
    len () {
        return this.list.length;
    }
  }
}
</script>
