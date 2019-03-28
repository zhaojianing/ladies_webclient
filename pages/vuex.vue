<template>
  <ul>
    <li v-for="todo in article" :key="todo.key">
      <input type="checkbox" :checked="todo.done" @change="addTodo('aaa')">
      <span :class="{ done: todo.done }">{{ todo.text+ '--'+ todo.done }}</span>
    </li>
    <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    article () {
      return this.$store.state.article.list
    }
  },
  methods: {
    addTodo (text) {
        const key = 1;
      this.$store.commit('article/get', text)
      text = ''
    },
    ...mapMutations({
      toggle: 'article/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>