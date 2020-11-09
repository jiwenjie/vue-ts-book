// 首页相关接口请求
import request from '@/utils/request'

export const getBanner = () =>
  request({
    url: '/api/banner/json',
    method: 'get',
  })


// export const getUserInfo = () =>
//   request({
//     url: '/api/account',
//     method: 'get'
//   })
