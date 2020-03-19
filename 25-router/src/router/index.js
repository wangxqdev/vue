import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    // 默认重定向至首页
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  // 默认哈希模式, 改成 HTML5 History 模式
  mode: 'history',
  // 统一修改
  linkActiveClass: 'active'
})

export default router
