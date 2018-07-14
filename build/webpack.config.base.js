const path = require('path')

const config = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node-modules/,
        enforce: 'pre' // 在使用loader处理之前，先通过eslint处理
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'static/images/[name].[hash:8].[ext]'
          }
        }]
      }
    ]
  }
}

module.exports = config
