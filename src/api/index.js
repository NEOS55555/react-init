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
function send(url, config) {
  url = JSON.parse(JSON.stringify(url))
  if (isDev) {
    url.path = (url.proxy || '') + url.path
  }
  url.path = (url.productHost || '') + url.path
  return apiAxios.send(url, config)
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
