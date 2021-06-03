const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, './src'),
    publicPath: '/',
    host: 'localhost',
    port: 9000,
    open: true, // 打开浏览器，默认false
    stats: {
      colors: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8008',
        // 如果你不想始终传递 /api ，则需要重写路径：
        pathRewrite: { '^/api': '' },
      },
      '/sys': {
        target: 'http://localhost:8009',
        // 如果你不想始终传递 /api ，则需要重写路径：
        pathRewrite: { '^/sys': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            // loader: require.resolve("sass-resources-loader"),
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/assets/css/default.scss'),
              ], //这里是你自己放公共scss变量的路径
            },
          },
        ],
      },
    ],
  },
}
