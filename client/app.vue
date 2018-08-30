<template>
  <div id="app">
    <div id="cover"></div>
    <Header />
    <p>{{fullName}} {{count}}</p>
    <p>{{textA}}</p>
    <p>{{textC}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!--<Todo />-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <button @click="notify">click me</button>
   <!-- <notification content="test notify"></notification>-->
    <Footer />
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    this['a/add']()
    this['a/updateText'](123)
    /* this.$store.dispatch('updateCountAsync', {
      num: 5,
      time: 2000
    }) */
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    /* let i = 0
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000) */
  },
  computed: {
    /* textA () {
      return this.$store.state.b.text
    }, */
    ...mapState({
      count: state => state.count,
      textA: state => state.a.text,
      textC: state => state.cModule.text
    }),
    ...mapGetters(['fullName'])
    /* count () {
      return this.$store.state.count
    },
    fullName () {
      return this.$store.getters.fullName
    } */
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText']),
    notify() {
      this.$notify({
        content: 'test $notify'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  #cover{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    opacity: .8;
    z-index: -1;
  }

</style>
