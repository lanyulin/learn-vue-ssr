<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    />
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    ></tabs>
  </section>
</template>

<script>
  import Item from './item.vue'
import Tabs from './tabs.vue'

  let id = 0

  export default {
    name: 'todo',
    data () {
      return {
        todos: [],
        filter: 'all'
      }
    },
    props: ['id'],
    mounted () {
      // console.log(this.id)
    },
    computed: {
      filteredTodos () {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('todo before enter')
      next()
    },
    components: {
      Item,
      Tabs
    },
    methods: {
      addTodo (e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo (id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter (state) {
        this.filter = state
      },
      clearAllCompleted () {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>

<style lang="less" scoped>
.real-app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
}
</style>
