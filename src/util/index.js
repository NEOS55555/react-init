import React from 'react'
import { message } from 'antd'

import eventBus from './eventBus'

import { RouteWithRoutes, routerPathTrans } from './routerUtil'

export { RouteWithRoutes, routerPathTrans }

export const isLegal = (str = '') => {
  if (typeof str === 'number') {
    return !isNaN(str)
  }
  /*if (str === '' || str === null) {
		return false;
	}*/
  const reg = /[\s\@\#\$\%\^\&\*\{\}\:\.\"\'\<\>\?\|]/gi
  return !reg.test(str)
}
// 不包含空格
export const isLegalExps = (str = '') => {
  if (typeof str === 'number') {
    return !isNaN(str)
  }
  /*if (str === '' || str === null) {
		return false;
	}*/
  const reg = /[\@\#\$\%\^\&\*\{\}\:\.\"\'\<\>\?\|]/gi
  return !reg.test(str)
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    if (!file) {
      return resolve(null)
    }
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const Validator = function Validator() {
  this.list = []
  this.add = (val, method, errCb) => {
    // console.log(val)
    this.list.push({
      run: () => method(val),
      errCb,
    })
  }
  this.check = () =>
    this.list.every(({ run, errCb }) =>
      run() ? true : errCb && errCb() && false
    )
}

function getRand(a, b) {
  return Math.floor(Math.random() * (b - a) + a)
}

function doubced(cb, timeout = 500) {
  let timmer = null
  return () => {
    clearTimeout(timmer)
    timmer = setTimeout(() => {
      cb && cb()
    }, timeout)
  }
}

// 是否在权限列表内，也就是是否被监控
export const getFilsData = (invoker, paths) => {
  return invoker.invoke('getTxts', { paths }).then((dataArr) => {
    // console.log(res.data.type)
    return dataArr.map((res) => res.data)
  })
}

export { getBase64, getRand, doubced, eventBus }

export const isBlankObj = (obj = {}) => {
  return Object.keys(obj).length == 0
}
