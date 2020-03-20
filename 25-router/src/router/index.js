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
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    // 局部前置守卫
    // beforeEnter: (to, from, next) => {
      
    // }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    // 动态路由
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  routes,
  // 默认哈希模式, 改成 HTML5 History 模式
  mode: 'history',
  // 统一修改
  linkActiveClass: 'active'
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

// 全局后置守卫
// router.afterEach((to, from) => {

// })

export default router
