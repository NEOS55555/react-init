import apiAxios from './apiAxios'
import apiList from './apiMap'

const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  const item = Object.keys(apiList).find(
    (it) => Object.keys(apiAxios).indexOf(it) !== -1
  )
  if (item) {
    throw Error(`apiList不可添加名称为${item}的接口`)
  }
}
function send(url, config = {}) {
  let path = url.path
  if (isDev) {
    path = (url.proxy || process.env.PROXY_API || '') + path
  }
  path = (url.proxyHost || '') + path
  return apiAxios.send({ ...url, path }, config)
}
const apiAxiosSend = {}
for (let key in apiList) {
  const apiItem = apiList[key]
  apiAxiosSend[key] = function (...args) {
    send(apiItem, ...args)
  }
}

export default {
  ...apiAxios,
  send,
  ...apiAxiosSend,
}
