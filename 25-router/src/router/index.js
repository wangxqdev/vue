import Vue from 'vue'
import VueRouter from 'vue-router'

// @Deprecated
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(VueRouter)

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

const routes = [
  {
    // 默认重定向至首页
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    // 动态路由
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
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
