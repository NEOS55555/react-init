export default {
  geta: {
    method: 'get',
    path: '/aa/:a',
    proxy: '/api',
    productHost: 'http://abc.com',
  },
  getab: {
    method: 'get',
    path: '/aa/:a',
    proxy: '/api',
    lazyput: true, // 替换了:a之后，params里的参数a是否还留着
    productHost: 'http://abc.com',
  },
  getb: {
    method: 'get',
    path: '/abc',
    proxy: '/sys',
  },
}
