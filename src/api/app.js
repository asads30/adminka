import request from '@/utils/request'

export function getUsers(params) {
  return request({
    url: '/user/',
    method: 'get',
    params
  })
}

export function getChannels(params) {
  return request({
    url: '/channel/',
    method: 'get',
    params
  })
}

export function getProducts(params) {
  return request({
    url: '/product/',
    method: 'get',
    params
  })
}

export function getPayments(params) {
  return request({
    url: '/payment/',
    method: 'get',
    params
  })
}

export function getPayouts(params) {
  return request({
    url: '/paymentQuery/',
    method: 'get',
    params
  })
}
