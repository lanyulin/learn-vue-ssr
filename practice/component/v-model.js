import Vue from 'vue'

const component = {
  model: {
    prop: 'value',
    event: 'click'
  },
  props: {
    text: String,
    value: String
  },
  template: `
    <input type="text" :value="value" @input="handleClick" />
  `,
  methods: {
    handleClick (e) {
      this.$emit('click', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  data: {
    value: '拉拉'
  },
  components: {
    comp: component
  },
  template: `
    <comp v-model="value"></comp>
  `
})
