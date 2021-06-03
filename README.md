# react-init

初始化一个 react 项目

##apiList
导出一个接口对象，proxy 为代理的配置。productHost 为上线时可能会用到的接口地址，可以用 process.env 中的配置来切换地址链接
<br>{<br>
geta: {<br>
method: 'get',<br>
path: '/aa',<br>
proxy: '/api',<br>
productHost: 'http://abc.com',<br>
},<br>
getb: {<br>
method: 'get',<br>
path: '/abc/:param',<br>
proxy: '/sys',<br>
},<br>
}
