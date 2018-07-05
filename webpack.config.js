const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin'); // 非js的代码打包成单独的静态文件
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.jsx/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
           options: {
            limit: 20000,
            name: 'images/[name].[hash:7].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlWebpackPlugin()
  ]
};

if (isDev) {
  // config.devTool = '#cheap-module-eval-source-map';  // 官方推荐，速度快且格式没问题
  config.module.rules.push({
    test: /\.less/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'less-loader'
    ]
  });
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,  // 编译中的错误，显示出来
    },
    open: true,  // 启动server的时候，自动打开浏览器
    hot: true,
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 启动server的一个插件
  )
}else {
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
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
  });
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash:8].css'
    })
  )
}

module.exports = config;