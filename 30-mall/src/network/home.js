import request from './request'

export let getHomeMultidata = () => {
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