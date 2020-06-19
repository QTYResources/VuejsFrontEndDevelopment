(function () { 'use strict'
  var createApp = function () {
    return new Vue({
      template: '<div id="app"> \
          {{msg}} \
          <button @click="click">click</button>\
          <ul><li v-for="n in 100000">{{n}}</li></ul>\
        </div>',
      data: {
        msg: 0
      },
      methods : {
        click : function() {
          alert(this.msg);
        }
      }
    })
  }
  // 判断当前环境是服务端环境还是浏览器环境
  if (typeof module !== 'undefined' && module.exports) {
    // 服务端环境则
    module.exports = createApp
  } else {
    //浏览器环境，直接进行实例化
    this.app = createApp()
  }
}).call(this)
