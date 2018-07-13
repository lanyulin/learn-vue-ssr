import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    // console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      text: 'component value'
    }
  },
  template: `
    <div :style="style">
      <child-component></child-component>
    </div>
  `
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  provide () { // 默认不提供reactive特性,get方法可解决。但是不推荐，未来可能会取消
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  data: {
    value: '123'
  },
  template: `
    <div>
      <comp-one></comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})
