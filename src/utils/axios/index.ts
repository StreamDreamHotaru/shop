import axios from 'axios'
const sever = axios.create({
  baseURL: '',
  timeout: 1000
})
sever.interceptors.request.use(
  function (config) {
    for (const key in config.params) {
      if (!config.params[key]) {
        delete config.params[key]
      }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

sever.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    const res = error.response
    let message = '请求错误'
    switch (res.status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '未授权，请登录'
        // outer.push('/login')
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = `请求地址出错 http://localhost:8080${res.config.url}`
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误'
        break
      case 501:
        message = '服务未实现'
        break
      case 502:
        message = '网关错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网关超时'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
    }
    return Promise.reject(message)
  }
)
export default sever
