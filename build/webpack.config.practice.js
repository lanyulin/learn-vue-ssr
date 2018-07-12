const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // webpack4需加入的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // html注入（hash、ejs）
const merge = require('webpack-merge') // 合并webpack配置，根据配置项合理合并
const baseConfig = require('./webpack.config.base')

const devServer = {
  contentBase: path.resolve(__dirname, '../dist'),
  port: 8001,
  host: '127.0.0.1',
  overlay: {
    errors: true // 编译中的错误，显示出来
  },
  open: true, // 启动server的时候，自动打开浏览器
  hot: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new VueLoaderPlugin()
]

let config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/instance/index.js'),
  module: {
    rules: [{
      test: /\.less/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'less-loader'
      ]
    }]
  },
  devServer,
  // import Vue from 'vue'，指定vue包
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
})

module.exports = config
