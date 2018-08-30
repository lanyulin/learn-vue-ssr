import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <slot :text="text"></slot>
    </div>
   `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      text: 'component value'
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: 'header: 这是具名插槽'
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span) // comp拿到的是VueComponent,可以获取这个实例的所有属性、方法； span就是这个span节点
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot="header" ref="span">{{value}}</span>  // 这个变量是引用组件的实例data
        <span slot="body">this is body</span>
        <span slot-scope="props">{{props.text}}</span>   // 作用域插槽，props表示组件comp-one传入的props，直接使用
      </comp-one>
    </div>
  `
})
