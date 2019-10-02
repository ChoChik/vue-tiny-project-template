import request from '@/utils/request'

export function login (data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '',
    method: 'post'
  })
}
