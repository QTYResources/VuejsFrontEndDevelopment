'use strict'

var fs = require('fs')
var path = require('path')
global.Vue = require('vue')
// 获取index.html 布局
var layout = fs.readFileSync('./index.html', 'utf8')
// 拆分布局成两段HTML
var layoutSections = layout.split('<div id="app"></div>')
var preAppHTML = layoutSections[0]
var postAppHTML = layoutSections[1]
console.log(layoutSections);

var renderer = require('vue-server-renderer').createRenderer()
// 创建一个Express服务器
var express = require('express')
var server = express()

// 设置"static"文件夹为静态资源路径
server.use('/static', express.static(
  path.resolve(__dirname, 'static')
))
// 处理所有的Get请求
server.get('*', function (request, response) {

  renderer.renderToString(
    // 获取app.js的Vue实例
    require('./static/app')(),

    function (error, html) {
      if (error) {
        console.error(error)
        return response
          .status(500)
          .send('Server Error')
      }
      // 将渲染好的HTML插入替换index.html中，返回给浏览器
      response.send(layout.replace('<div id="app"></div>', html))
    }
  )
})

// 监听4000端口， 通过http://localhost:4000/ 访问应用
server.listen(4000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:5000')
})
