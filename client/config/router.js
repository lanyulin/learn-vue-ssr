import VueRouter from 'vue-router'
import routes from './routes'

export default () => {
  return new VueRouter({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link', // 如果当前页面与vue-link中的to保持一致，给其中的a标签添加此类
    linkExactActiveClass: 'exact-active-link', // 和上面一样，区别在于，vue-link中的to如果是路由地址的子集，那么上面这个类不会加在外层路由上
    scrollBehavior (to, from, savedPosition) { // savedPosition会记录上一次滚动的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // parseQuery (query) {}, // query是字符串
    // stringifyQuery (obj) {},
    // fallback: true // 某些浏览器不支持history模式，自动切换成hash模式
  })
}
