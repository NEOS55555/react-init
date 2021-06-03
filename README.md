# react-init
初始化一个react项目


##apiList
导出一个接口对象，proxy为代理的配置。productHost为上线时可能会用到的接口地址，可以用process.env中的配置来切换地址链接
{
  geta: {
    method: 'get',
    path: '/aa',
    proxy: '/api',
    productHost: 'http://abc.com',
  },
  getb: {
    method: 'get',
    path: '/abc/:param',
    proxy: '/sys',
  },
}
