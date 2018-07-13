import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p><input v-model="number" type="text"></p>
      <p><input v-model="firstName" type="text"></p>
      <p>fullName: {{fullName}}</p>
      <p>{{obj.a}}</p>
    </div>
  `,
  data: {
    firstName: 'Jocky',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {
      a: 123
    }
  },
  mounted () {
    this.obj = {
      a: 90
    }
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    firstName (newName, oldName) {
      this.fullName = newName + ' ' + this.lastName
    },
    /* obj (newValue) {
      console.log('obj.a changed')
    }, */
    'obj.a': {
      handle () {
        console.log('obj.a changed')
      }
    }
  },
  methods: {
    getName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
