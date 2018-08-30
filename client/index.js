import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'
import Notification from './components/notification'

import createStore from './store/store'
import './assets/styles/global.less'
import createRouter from './config/router'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Notification)

const store = createStore()
store.registerModule('cModule', {
  state: {
    text: 'cModule'
  }
})

/* store.watch(state => state.count + 1, (newCount) => {
  console.log(newCount)
}) */

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

const router = createRouter()
// 全局的导航守卫（钩子）
router.beforeEach((to, form, next) => {
  // 此方法可验证某些页面需要登陆，才能显示
  console.log('before each invoked')
  next()
})
router.beforeResolve((to, form, next) => {
  console.log('before resolve')
  next()
})
router.afterEach((to, form) => {
  console.log('after each invoked')
})

document.title = 'vue+ssr'
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
