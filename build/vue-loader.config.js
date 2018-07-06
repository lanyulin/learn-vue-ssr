// 官方文档 https://vue-loader.vuejs.org/guide/css-modules.html#usage

// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true, // vue文件的template中，换行的时候如果有空格，被去掉（空格在浏览器中被当作一个空白节点）
    extractCSS: false, // vue文件中的样式打包到最终的css文件里（vue本身不打包，因为异步加载组件样式的机制）
    cssModules: {
      // vue文件里的css对应的className，会在当前文件里生成独一无二的名字，其他文件不能调用
      // import style from '../x.css'，页面需要配合修改，暂时没用
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true // 将class中以-命名的方式转化为驼峰命名
    }
    // hotReload: false, // 热重载，根据环境变量生成
    // loaders: {  // vue中自定义模块制定loader，看vue-loader官方文档，比较难(用于组件库中，给组件写一些文档)
    // 'docs': docsLoader
    // },
  }
}
