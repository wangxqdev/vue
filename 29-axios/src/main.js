import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

// 1. axios的基本使用
axios({
  url: '/home/multidata',
  method: 'get'
}).then(res => console.log(res))

axios({
  url: '/home/data',
  method: 'get',
  params: {
    type: 'sell',
    page: 1
  }
}).then(res => console.log(res))

// 2. axios的并发请求
axios.all([
  axios({
    url: '/home/data',
    method: 'get',
    params: {
      type: 'pop',
      page: 5
    }
  }),
  axios({
    url: '/category',
    method: 'get'
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
}))