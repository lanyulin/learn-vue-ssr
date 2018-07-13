import Vue from 'vue'

const component = {
  props: {
    propOne: String
  },
  template: `
    <div>
      <p v-model="text" @input="handleClick"></p>
      <p>{{propOne}}</p>
    </div>
  `,
  data () { // 必须是函数
    return {
      text: 123
    }
  },
  mounted () {
    console.log('component mounted')
  },
  methods: {
    handleClick () {
      this.text += 1
    }
  }
}

// Vue的一个子类
const CompVue = Vue.extend(component)

new CompVue({
  el: '#root',
  propsData: {
    propOne: 'xxx'
  },
  data: {
    text: '啦啦啦'
  },
  mounted () {
    console.log('instance mounted')
  }

})
