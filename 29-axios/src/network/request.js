import axios from 'axios'

export default config => {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 1. 请求拦截
  //  a. 请求特殊处理
  //  b. 请求图标
  //  c. token验证
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  // 2. 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}