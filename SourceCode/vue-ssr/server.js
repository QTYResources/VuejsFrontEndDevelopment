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

server.get('*', function (request, response) {
  // 渲染我们的Vue实例作为流
  var stream = renderer.renderToStream(require('./static/app')())
  // 将预先的HTML写入响应
  response.write(preAppHTML)
  // 每当新的块被渲染
  stream.on('data', function (chunk) {
    // 将块写入响应
    response.write(chunk)
  })
  // 当所有的块被渲染完成
  stream.on('end', function () {
    // 将post-app HTML写入响应
    response.end(postAppHTML)
  })
  // 当渲染时发生错误
  stream.on('error', function (error) {
    // 打印错误到控制台
    console.error(error)
    // 告诉客服端发生了错误
    return response
      .status(500)
      .send('Server Error')
  })
})

// 监听3000端口， 通过http://localhost:3000/ 访问应用
server.listen(3000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:3000')
})
