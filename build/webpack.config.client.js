const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // webpack4需加入的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // html注入（hash、ejs）
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 非js的代码打包成单独的静态文件
const merge = require('webpack-merge') // 合并webpack配置，根据配置项合理合并
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
  contentBase: path.resolve(__dirname, '../dist'),
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true // 编译中的错误，显示出来
  },
  open: true, // 启动server的时候，自动打开浏览器
  hot: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlWebpackPlugin(),
  new VueLoaderPlugin()
]

let config

if (isDev) {
  config = merge(baseConfig, {
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
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [{
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    },
    plugins: defaultPlugins.concat([
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contentHash:8].css'
      })
    ])
  })
}

module.exports = config
