const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const distName = 'dist'
module.exports = merge(config, {
  plugins: [
    new CleanWebpackPlugin({ default: [distName] }),
    /* new ExtractTextPlugin({
          filename: '../dist/css/style.css', // 从 .js 文件中提取出来的 .css 文件的名称
        }), */
    new MiniCssExtractPlugin({
      // filename: path.resolve(__dirname, '../' + distName + '/css/styles.css'), //如果需要将css文件单独放入css文件夹中需要../
      filename: 'static/css/style.[chunkhash:8].css', //如果需要将css文件单独放入css文件夹中需要../
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  output: {
    publicPath: './',
    // publicPath: 'https://cdn.example.com/assets/',
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, '../' + distName),
    devtoolModuleFilenameTemplate: (info) =>
      path
        .relative(path.resolve(__dirname, 'src'), info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },
})
/* 
output: {
  // One of the below
  publicPath: 'auto', // It automatically determines the public path from either `import.meta.url`, `document.currentScript`, `<script />` or `self.location`.
  publicPath: 'https://cdn.example.com/assets/', // CDN（总是 HTTPS 协议）
  publicPath: '//cdn.example.com/assets/', // CDN（协议相同）
  publicPath: '/assets/', // 相对于服务(server-relative)
  publicPath: 'assets/', // 相对于 HTML 页面
  publicPath: '../assets/', // 相对于 HTML 页面
  publicPath: '', // 相对于 HTML 页面（目录相同）
}
*/
