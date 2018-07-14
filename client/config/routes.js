// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    beforeEnter (to, from, next) {
      console.log('routes beforeEnter invoked')
      next()
    },
    meta: { // 保存路由信息，利于seo
      title: 'this is app',
      description: '及时解决就睡觉睡觉睡觉'
    }
    /* children: [
      {
        path: 'test',
        component: Login
      }
    ] */
  },
  {
    path: '/login',
    component: Login
  }
]
