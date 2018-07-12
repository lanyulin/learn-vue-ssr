import Vue from 'vue'

const app = new Vue({
  // el: '#roor',
  template: '<div>{{text}}</div>',
  data: {
    text: 1,
    obj: {}
  }
})
app.$mount('#root')

setInterval(() => {
  app.text += 1
  // app.$options.data +=  不生效
  // app.$data.text += 1  生效，data是代理到 app.$data 上的
}, 1000)

// 属性
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = h => {
//  return h('div', {}, 'new render function')
// }
// console.log(app.$root === app) // true
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs) // 拿到html节点或者组件实例
// console.log(app.$isServer) // 服务端渲染

// 方法
/* const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText}-${oldText}`)
}) // 和直接定义在对象里效果类似，但是区别在于$watch这种方式在路由跳转的时候，不会自动注销watch，解决如下:
setTimeout(() => {
  unWatch()
}, 2000) */ // app.$watch会返回一个方法unWatch

// 事件监听
/* app.$on('test', (a, b) => {
  console.log(`test emited ${a} ${b}`)
})
app.$emit('test', 1, 2) */

// 只监听一次
/* app.$once('test', (a, b) => {
  console.log(`test emited ${a} ${b}`)
})
setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000) */

// data中没有声明的变量，在后续操作中被更新的时候
/* app.$forceUpdate() // 不推荐使用，会强制重新渲染
app.$set(app.obj, 'a', i)  // 给某个对象上的属性设置某个值，声明这个属性是reactive的，$set相当于补上去了 */

// app.$delete() // 如果直接delete某个属性，但他的reactive还在，会导致内存溢出，所以推荐使用这个方法

// vm.$nextTick(callback) // 将回调延迟到下次DOM更新循环之后执行，因为操作data并不会同步改变vue的data，回调的this会自动绑定到调用它的实例
