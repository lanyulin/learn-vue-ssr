import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.less'
import createRouter from './config/router'

Vue.use(VueRouter)

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
  render: (h) => h(App)
}).$mount('#root')
