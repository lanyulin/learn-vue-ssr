import Vue from 'vue'

const component = {
  /* template: `
    <div :style="style">
      <slot></slot>
    </div>
   `, */
  props: {
    prop1: String
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
  render (createElement) {
    return createElement('div', {
      style: this.style
      /* on: {
        click: () => {
          this.$emit('click')
        }
      } */
    }, [
      this.$slots.header,
      this.prop1
    ])
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: '123'
  },
  mounted () {
    console.log('2')
  },
  /* template: `
    <div>
      <comp-one ref="comp">
        <span ref="span">{{value}}</span>
      </comp-one>
    </div>
  `, */
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          prop1: this.value
        },
        /* on: {
          click: this.handleClick
        }, */
        nativeOn: { // 如果定义在组件根节点上，或是原生dom节点，则自动绑定,即组件内部不用使用$emit触发
          click: this.handleClick
        }
      },
      [
        createElement('p', {
          ref: 'p',
          slot: 'header',
          domProps: {
            innerHTML: '<span>890</span>' // 这样写标签，后面设置的this.value就无效了
          },
          attrs: {
            id: 'test-id'
          }
        }, this.value)
      ]
    )
  }
})
