import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: {
      type: String,
      // require: true,
      // default: '拉拉',
      validate (value) {
        return typeof value === 'string'
      }
    }
  },
  template: '<div>{{text}}</div>',
  data () {
    return { // 不用new vue()方式定义的组件，data一定要用return函数，否则vue会报错，因为数据不是响应的
      text: 123
    }
  }
}

// Vue.component('comp-one', component) // 全局定义组件,随处可直接用

new Vue({
  el: '#root',
  components: { // 局部使用
    CompOne: component
  },
  template: '<comp-one propOne="lalal"></comp-one>'
})
