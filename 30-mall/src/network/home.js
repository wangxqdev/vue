import request from './request'

export let requestHomeMultidata = () => {
  return request({
    url: '/home/multidata',
    methods: 'get'
  }) 
}