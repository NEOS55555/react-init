# react-init

初始化一个 react 项目

## apiMap

导出一个接口对象，proxy 为代理的配置。productHost 为上线时会用到的接口地址，可以用 process.env 中的配置来切换地址链接
<br>{<br>
geta: {<br>
&ensp;method: 'get',<br>
&ensp;path: '/aa',<br>
&ensp;proxy: '/api',<br>
&ensp;productHost: 'http://abc.com',<br>
},<br>
getb: {<br>
&ensp;method: 'get',<br>
&ensp;path: '/abc/:param',<br>
&ensp;proxy: '/sys',<br>
&ensp;lazyput: true, // 替换了:a 之后，params 里的参数 a 是否还留着。默认删除(params 为传递的参数)
},<br>
}
<br>

## apiAxios

接口调用
<br>
apiAxios.geta({<br>
&ensp;params: {<br>
&ensp;a: 1,<br>
},<br>
&ensp;config: {<br> // 这个是 axios 的配置
&ensp;headers: { TOKEN: '1' },<br>
},<br>
})<br>
