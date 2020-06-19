// 步骤 1:创建一个Vue实例
var Vue = require('vue')
var app = new Vue({
  // template : '<h1>{{msg}}</h1>',
  render(h) {
  	return h('h1', this.msg);
  },
  data : {
  	msg : 'hello world'
  }
})
// 步骤 2: 创建一个渲染器
var renderer = require('vue-server-renderer').createRenderer()
// 步骤 3: 将 Vue实例 渲染成 HTML
renderer.renderToString(app, function (error, html) {
  if (error) throw error
  console.log(html)
  // => <p server-rendered="true">hello world</p>
})