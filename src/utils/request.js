import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken()
    }

    // transform data standard format
    if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(config.method.toUpperCase())) {
      config.headers['Content-Type'] = 'application/json'
    }

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 200, it is judged as an error.
    // todo 根据选用的样式框架，完成成功响应的消息提示
    if (res.code !== 200 && response.status !== 200) {
      // todo 根据后端错误码约定，完成业务错误响应的消息提示
      // example
      if (res.code === 1410) {
        // no-privilege
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // todo 根据选用的样式框架，完成其他错误响应的消息提示
    return Promise.reject(error)
  }
)

export default service
