const webpack = require('webpack')
const { merge } = require('webpack-merge')
// const path = require('path');
const dotenv = require('dotenv')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = require('../webpack.config')
// const configProd = require('./webpack.production')
const environment = process.env.NODE_ENV

const processEnv = dotenv.config({
  path: path.resolve(__dirname, '../.env.' + environment),
})
console.log(environment, processEnv)
module.exports = merge(
  {
    mode: environment,
    entry: ['./src/index.js'],
    // 将 jsx 添加到默认扩展名中，省略 jsx
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        // '~': outdir,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs|ts)$/, // jsx文件的正则
          exclude: /node_modules/, // 排除 node_modules 文件夹
          use: {
            // loader 是 babel
            loader: 'babel-loader',
            options: {
              // babel 转义的配置选项
              babelrc: false,
              presets: [
                // 添加 preset-react
                require.resolve('@babel/preset-react'),
                [require.resolve('@babel/preset-env'), { modules: false }],
              ],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },
        /* {
        // 解析jsx文件类型
        test: /\.jsx?$/,
        //
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      }, */
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...processEnv.parsed,
          NODE_ENV: environment,
        }),
      }),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        inject: true,
        // title: '牛逼',
      }),
    ],
  },
  config
  // configProd
)
