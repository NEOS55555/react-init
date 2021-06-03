import axiosOri from 'axios'
import { HTTP, CONFIG } from '@/constant'
// const { API_URL } = comConstant
// console.log(CONFIG.BASEURL)
const axios = axiosOri.create({
  // baseURL: CONFIG.BASEURL,
  timeout: CONFIG.TIMEOUT,
  // headers: { 'X-Custom-Header': 'foobar' },
})

//请求拦截
axios.interceptors.request.use(
  (config) => {
    // loading().transShow()
    return config
  },
  (err) => {
    // loading().close()
    return Promise.reject(err)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    const { data = {}, status } = response
    switch (status) {
      case HTTP.CODE_401:
        console.log('重新登陆')
        return
      case HTTP.CODE_200:
        return data
      default:
        return Promise.reject(response)
    }
    /* if (data[CONFIG.RESPONSE_CODE] !== HTTP.CODE_200) {
      return Promise.reject(response)
    } */
    // return data
  },
  function (err) {
    return Promise.reject(err)
  }
)

const pstMethods = ['post', 'put', 'delete']
const methods = ['get', 'patch', ...pstMethods]

const apiAxios = {}

methods.forEach((method) => {
  const isPst = pstMethods.indexOf(method) != -1
  apiAxios[method] = (url, obj = {}) => {
    let { params, config = {} } = obj
    // console.log(params)
    url = url.replace(/(:[a-zA-z0-9]+)/gi, function (sep) {
      return params[sep.slice(1)]
    })
    params = isPst ? params : { params, ...config }
    // console.log('url:', url, params, config)
    return axios[method](url, params, config)
  }
})

apiAxios.send = function (url, obj) {
  this[url.method](url.path, obj)
}

export default apiAxios