import axios from 'axios'

export default config => {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    // 测试地址
    baseURL: 'http://localhost:8090',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}