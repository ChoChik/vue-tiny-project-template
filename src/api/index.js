import request from '@/utils/request'

export default {
  // 示例
  example (data, loading = true) {
    return request({
      url: '/api/wap/courses',
      method: 'get',
      data,
      loading
    })
  }
}
