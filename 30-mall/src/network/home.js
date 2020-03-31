import request from './request'

export let getHomeMultiData = () => {
  return request({
    url: '/home/multidata',
    method: 'get'
  }) 
}

export let getHomeData = (type, page) => {
  return request({
    url: '/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}