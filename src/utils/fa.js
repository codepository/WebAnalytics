(function () {
  var w = null
  var r = void 0
  var x = !1
  var v = !0
  var f = {
    xmlHttp: r
  }
  var c = {
    ip: 'http://pv.sohu.com/cityjson?ie=utf-8', // 获取ip和区域js
    dm: ['news.fznews.com.cn', 'localhost', 'file:///D:/Workspaces/vue/WebAnalytics/']
  }
  function Mt () {}
  // Mt.request 服务请求
  Mt.prototype.request = {} // request对象
  Mt.prototype.request.post = function (url, data) {
    if (f.xmlHttp === r) {
      f.xmlHttp = Mt.prototype.request.createXMLHttpRequest()
    }
    f.xmlHttp.open('post', url, true)
    f.xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    f.xmlHttp.send(data)
  }
  Mt.prototype.request.get = function (url) {
    if (f.xmlHttp === r) {
      f.xmlHttp = Mt.prototype.request.createXMLHttpRequest()
    }
    f.xmlHttp.open('get', url, true)
    f.xmlHttp.send(null)
  }
  Mt.prototype.request.createXMLHttpRequest = function () {
    if (window.ActiveXObject) {
      return new ActiveXObject('Microsoft.XMLHTTP')
    } else if (window.XMLHttpRequest) {
      return new XMLHttpRequest()
    }
  }
  Mt.prototype.seed = function (seed) {
    seed = (seed * 9301 + 49297) % 233280
    return seed / (233280.0)
  }
  Mt.prototype.rand = function (number) {
    return Math.ceil(Mt.prototype.seed(new Date().getTime()) * number)
  }
  // Mt.cookie
  Mt.prototype.cookie = {}
  Mt.prototype.cookie.set = function (a, b, d) { // d为{expire:'',domain:'', path:''}
    var e
    if (d.expire) {
      e = new Date()
      e.setTime(e.getTime() + d.expire * 24 * 60 * 60 * 1000)
    }
    document.cookie = a + '=' + b + (d.domain ? '; domain=' + d.domain : '') + (d.path ? '; path=' + d.path : '') + (e ? '; expires=' + e.toGMTString() : '')
    console.log(document.cookie)
  }
  Mt.prototype.cookie.get = function (a) { // a 为 key
    var reg = new RegExp('(^| )' + a + '=([^;]*)(;|$)')
    a = reg.exec(document.cookie)
    return a ? a[2] : w
  }
  Mt.prototype.cookie.uid = function (ip) {
    var x = Math.random().toString(36).substr(3, 10) + Date.now().toString(36)
    var ips = ip.split('.')
    for (var i = 0; i < ips.length; i++) {
      x += Mt.prototype.rand(ips[i])
    }
    return x
  }
  Mt.prototype.cookie.Nb = function (ip, a, b) {
    var c = Mt.prototype.cookie.get('Fa_ck_')
    if (!c) {
      var d = 'Fa_ck_'
      Mt.prototype.cookie.set(d, Mt.prototype.cookie.uid(ip), {
        domain: a,
        path: b,
        expire: 3650
      })
      return Mt.prototype.cookie.get('Fa_ck_')
    }
    return c
  }
  // Mt.lang
  Mt.prototype.lang = {}
  Mt.prototype.lang.d = function (a, b) {
    // 判断变量a的类型是否为b,如 a=123,b='Number' 则返回true
    return '[object ' + b + ']' === {}.toString.call(a)
  }
  // Mt.h 终端属性
  Mt.prototype.h = {}
  Mt.prototype.h.sr = (window.screen.width || 0) + 'x' + (window.screen.height || 0) // 屏幕尺寸
  Mt.prototype.h.b = function () { // 获取浏览器
    var t = navigator.userAgent
    var n = ['QQBrowser', 'SE', 'Trident', 'Firefox', 'Opera', 'iPhone', 'iPad', 'MQQBrowser', 'Windows Phone', 'BlackBerry', 'UCWEB', 'Edge', '其它']
    var m = ['QQ', '搜狗', 'IE', 'Firefox', 'Opera', 'iPhone', 'iPad', '手机QQ', 'Windows Phone', 'BlackBerry', 'UCWEB', 'Microsoft Edge', '其它']
    for (var e = '', r = 0; r < n.length; r++) {
      e = n[r]
      if (t.match(new RegExp(e, 'i'))) {
        e = m[r]
        break
      }
    }
    if (e === '其它') {
      if (t.indexOf('WOW64') > -1) {
        e = '360'
      } else if (!(t.indexOf('Chrome') > -1) && t.indexOf('Safari') > -1) {
        e = 'Safari'
      } else if (t.indexOf('Chrome') > -1 && t.indexOf('Safari') > -1) {
        e = 'Chrome'
      }
    }
    return e
  }
  Mt.prototype.h.p = function () { // 设备平台
    for (var n = ['Android', 'iPhone', 'Windows', 'iPad', 'iPod', 'iOS', 'Linux', 'Macintosh'], e = '', r = 0; r < n.length; r++) {
      e = n[r]
      if (navigator.userAgent.match(new RegExp(e, 'i'))) {
        break
      }
    }
    return e
  }
  Mt.prototype.h.m = function () { // 判断是否是手机端
    if (navigator.userAgent.match('Mobile', 'i')) {
      return 1
    }
    return 0
  }
  Mt.prototype.h.get = function () { // 获取终端属性
    var h = {}
    h.sr = Mt.prototype.h.sr
    h.browser = Mt.prototype.h.b()
    h.platform = Mt.prototype.h.p()
    h.devicetype = Mt.prototype.h.m()
    return h
  }
  // mt.localStorage 本地存储
  Mt.prototype.localStorage = {}
  // Mt.p 页面属性
  Mt.prototype.p = {}
  Mt.prototype.p.get = function () {
    var m = document.getElementsByTagName('meta')
    var p = {}
    p.title = document.title || ''
    for (var i = 0; i < m.length; i++) {
      if (m[i].getAttribute && m[i].getAttribute('name')) {
        H.prototype.z.set(m[i].getAttribute('name'), m[i].getAttribute('content'), p)
      }
    }
    return p
  }
  // Mt.url
  Mt.prototype.url = {}
  Mt.prototype.url.u = function (a) {
    return a.split('?') ? a.split('?')[0] : a
  }
  Mt.prototype.url.vb = function (a) {
    a = a.match(/^(https?:\/\/)?([^\/\?#]*)/) ? a[2].replace(/.*@/, '') : w
    return a
  }
  Mt.prototype.url.T = function (a, e) { // a与e域名是否相同
    a = '.' + a.replace(/:\d+/, '') // 在a前加个.，并将冒号及紧随其后的连续数字替换成空
    e = '.' + e.replace(/:\d+/, '')
    var b = a.indexOf(e)
    return b > -1 && b + e.length === a.length
  }
  Mt.prototype.url.P = function () { // 返回当前域名
    for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) {
      if (Mt.prototype.url.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, '')
    }
    return a
  }
  // Mt.event 事件
  Mt.prototype.event = {}
  Mt.prototype.event.e = function (a, b, d) { // 为页面元素a添加事件类型b，处理方法为d
    a.attachEvent ? a.attachEvent('on' + b, function (e) { d.call(a, e) }) : a.addEventListener && a.addEventListener(b, d, x) // x为false
  }
  function H () {}
  // 对象操作
  H.prototype.z = {}
  H.prototype.z.set = function (a, b, c) { // 向对象c添加key为a,值为b的项
    c[a] = b
  }

  // 缓存
  // 加载js
  H.prototype.load = function (a, e) { // 添加地址为a的js文件,加载完毕之后执行函数e
    var f = document.createElement('script')
    f.charset = 'utf-8'
    Mt.prototype.lang.d(e, 'Function') && (f.readyState ? f.onreadystatechange = function () {
      f.onreadystatechange = w
      e()
    } : f.onload = function () {
      e()
    })
    f.src = a
    var l = document.getElementsByTagName('script')[0]
    l.parentNode.insertBefore(f, l)
  }
  var mt = new Mt()
  var h = new H()
  var result = {}
  // 页面状态
  function d (a) { // 若a是document属性返回a，若不是分别加上'webkit', 'ms', 'moz', 'o'前缀再判断一次
    var p = document
    var b = ''
    if (a in p) {
      b = a
    } else {
      for (var e = ['webkit', 'ms', 'moz', 'o'], d = 0; d < e.length; d++) {
        var y = e[d] + a.charAt(0).toUpperCase() + a.slice(1)
        if (y in p) {
          b = y
          break
        }
      }
    }
    return b
  }
  var ps = {
    p: d('visibilityState'), // 页面可见时为visible,不可见时为hidden
    z: d('hidden'), // 页面不可见时为false,可见时为true
    m: v, // 页面可见时为true
    g: v,
    n: v,
    q: v,
    k: v,
    t: +new Date(),
    u: +new Date(),
    s: 0, // 页面不可见时常
    y: null // 定时器
  }
  // 浏览器前进后退
  mt.event.e(window, 'pageshow', b())
  mt.event.e(window, 'pagehide', b)
  // 切换浏览器tab、最小化窗口、电脑休眠
  mt.event.e(document, 'visibilitychange', b)
  mt.event.e(window, 'load', function () {
    ps.t = +new Date()
    ps.u = ps.t
  })
  function b () {
    // clearTimeout(ps.y)
    var a
    ps.p && (a = document[ps.p] === 'visible') // 可见时a为true,否则为false
    ps.z && (a = !document[ps.z]) // 隐藏时a为false,否则为false
    ps.m = typeof a === 'undefined' ? v : a
    if (!ps.m) { // 页面不可见
      ps.k = v
      ps.u = +new Date()
    } else {
      ps.k = x
      ps.s += +new Date() - ps.u
    }
    // ps.y = setTimeout(b, 100)
  }
  // 获取页面和终端信息
  result.p = mt.p.get() // 获取meta信息
  result.b = mt.h.get() // 获取终端信息
  result.b['domain'] = mt.url.P()
  // 获取ip信息
  h.load(c.ip, function () { // 获取ip和区域信息
    // eslint-disable-next-line no-undef
    result.b['ip'] = returnCitySN['cip']
    // eslint-disable-next-line no-undef
    result.b['region'] = returnCitySN['cname']
    result.b['uid'] = mt.cookie.Nb(result.b['ip'])
    result.p.url = mt.url.u(document.location.href)
    // console.log(JSON.stringify(result))
    mt.event.e(window, 'beforeunload', function () { // 关闭前事件
      var r = {}
      r.url = mt.url.u(document.location.href)
      r.uid = mt.cookie.Nb(result.b['ip'])
      r.ip = result.b['ip']
      r.domain = mt.url.P()
      // 浏览时长
      r.duration = +new Date() - ps.t - ps.s
      r.pageopened = -1
      console.log(JSON.stringify(r))
      mt.request.post('http://localhost:8080/api/v1/tongji/close', JSON.stringify(r))
    })
    console.log(JSON.stringify(result))
    mt.request.post('http://localhost:8080/api/v1/tongji/webdata', JSON.stringify(result))
  })
})()
