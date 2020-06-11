const glob = require('glob')
let pages = {}
module.exports.pages = function (titleName) {
  glob.sync('./src/pages/*/*.js').forEach(filepath => {
    let fileList = filepath.split('/')
    let fileName = fileList[fileList.length - 1]
    name=fileName.substring(0, fileName.lastIndexOf("."))
    pages[name] = {
      entry: `src/pages/${name}/${name}.js`,
      // 模板来源
      template: `src/pages/${name}/${name}.html`,
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${name}.html` : `${name}.html`,
       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	  title: titleName,
	  // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', name]
    }
  })
  return pages
}
