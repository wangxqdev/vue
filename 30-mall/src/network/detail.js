import request from './request'

export let getDetail = (id) => {
  return request({
    url: `/detail/${id}`,
    method: 'get'
  })
}