import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div
      :class="{ active: isActive }" 
      :style="[styles, styles2]"
      @click="handleClick">
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    html: '<span>123</span>',
    styles: {
      color: 'red',
      appearance: 'none' // 根据浏览器自动添加prefix
    },
    styles2: {
      color: 'blue'
    }
  },
  methods: {
    handleClick () {
      alert("it is me!") // eslint-disable-line
    }
  }
})
