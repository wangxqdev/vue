import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(VueRouter)

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

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
  },
  {
    // 动态路由
    path: '/user/:userId',
    component: User
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
