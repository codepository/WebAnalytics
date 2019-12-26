(function () {
  var c = { // 客户信息
    id: '',
    dm: ['news.fznews.com.cn', 'localhost:8081/#/', 'file:///D:/Workspaces/vue/WebAnalytics/'],
    fa: 'src/utils/fa.js'// 流量统计js
  }
  function H () {}
  // 域名操作
  H.prototype.dm = {}
  H.prototype.dm.T = function (a, e) { // a与e域名是否相同
    a = '.' + a.replace(/:\d+/, '') // 在a前加个.，并将冒号及紧随其后的连续数字替换成空
    e = '.' + e.replace(/:\d+/, '')
    var b = a.indexOf(e)
    return b > -1 && b + e.length === a.length
  }
  H.prototype.dm.C = function () { // 判断当前地址是否属于需统计的地址
    for (var a = document.location.href, b = 0, d = c.dm.length; b < d; b++) {
      if (H.prototype.dm.ba(a, c.dm[b])) return true
    }
    return false
  }
  H.prototype.dm.ba = function (a, e) { // 地址a去掉协议头之后，判断是否能在开始位置匹配到e
    a = a.replace(/^https?:\/\//, '')
    return a.indexOf(e) === 0
  }
  H.prototype.dm.P = function () { // 返回当前域名
    for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) {
      if (H.prototype.dm.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, '')
    }
    return a
  }
  // 添加js文件
  H.prototype.load = function (src) { // 添加地址为src的js文件
    var f = document.createElement('script')
    f.charset = 'utf-8'
    f.src = src
    var l = document.getElementsByTagName('script')[0]
    l.parentNode.insertBefore(f, l)
  }
  var h = new H()
  if (h.dm.C()) {
    h.load(c.fa)
  }
})()
