// ()()
window.onload = function () {
  function mt () {}
  var x = !1
  var w = null
  mt.prototype.lang = {}
  mt.prototype.lang.d = function (a, b) {
    return '[object ' + b + ']' === {}.toString.call(a)
  }
  mt.prototype.lang.wa = function (a) {
    return mt.prototype.lang.d(a, 'Number') && isFinite(a)
  }
  mt.prototype.lang.g = function (a) {
    return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
  }
  mt.prototype.lang.trim = function (a) {
    //  \s: 空格; ^\s+: 以空格开始; \s+$:以空格结束
    return a.replace(/^\s+|\s+$/g, '')
  }
  mt.prototype.lang.J = function (a, b) {
    var d = x // x=false ,w=null
    if (Array.prototype.indexOf) d = a.indexOf(b) !== -1 // 数组a包含b 返回true
    else {
      for (var e = 0; e < a.length; e++) {
        if (a[e] === b) {
          d = true
          break
        }
      }
    }
    return d
  }
  mt.prototype.url = {}
  mt.prototype.url.m = function (a, b) {
    var d = a.match(RegExp('(^|&|\\?|#)(' + b + ')=([^&#]*)(&|$|#)', ''))
    console.log(d)
    return d ? d[3] : null
  }
  mt.prototype.url.mc = function (a) {
    var d = a.match(/^(https?:\/\/)/)
    console.log(d)
    return d ? d[1] : null
  }
  mt.prototype.url.vb = function (a) { // 获取地址a的域名
    return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, '') : w
  }
  mt.prototype.url.Q = function (a) {
    return (a = mt.prototype.url.vb(a)) ? a.replace(/:\d+$/, '') : a
  }
  mt.prototype.url.sa = function (a) {
    var d = a.match(/^(https?:\/\/)?[^\/]*(.*)/)
    console.log(d)
    return d ? d[2].replace(/[\?#].*/, '').replace(/^$/, '/') : w
  }
  mt.prototype.f = {}
  mt.prototype.f.pa = function (d) {
    return document.getElementById(d)
  }
  mt.prototype.f.La = function (d) {
    try {
      d = String(d)
      if (d.indexOf('!HMCQ!') === 0) return d
      if (d.indexOf('!HMCC!') === 0) {
        return document.querySelector(d.substring(6, d.length))
      }
      for (var e = d.split('>'), a = document.body, b = e.length - 1; b >= 0; b--) {
        if (e[b].indexOf('#') > -1) { // 包含#
          var g = e[b].split('#')[1] // 根据#分割后的第二个
          console.log(g)
          a = document.getElementById(g) || (a = document.getElementById(decodeURIComponent(g)))
          e = e.splice(b + 1, e.length - (b + 1))
          break
        }
      }
      console.log(d)
      for (d = 0; a && d < e.length;) {
        var m = String(e[d]).toLowerCase()
        if (!(m === 'html' || m === 'body')) { // 不为html或body
          var b = 0
          var n = e[d].match(/\[(\d+)\]/i) // 匹配包含"[\d+]"
          var g = []
          if (n) {
            b = n[1] - 1
            m = m.split('[')[0]
          } else if (a.childNodes.length !== 1) {
            for (var q = 0, t = 0, u = a.childNodes.length; t < u; t++) {
              var s = a.childNodes[t]
              s.nodeType === 1 && s.nodeName.toLowerCase() === m && q++
              if (q > 1) return w
            }
            if (q !== 1) return w
          }
          for (q = 0; q < a.childNodes.length; q++) a.childNodes[q].nodeType === 1 && a.childNodes[q].nodeName.toLowerCase() === m && g.push(a.childNodes[q])
          if (!g[b]) return w
          a = g[b]
        }
        d++
      }
      return a
    } catch (error) {
      return null
    }
  }
  function hello () {
    console.log('hi world')
  }
  mt.prototype.event = {}
  mt.prototype.event.e = function (a, b, d) {
    a.attachEvent ? a.attachEvent('on' + b, function (e) { d.call(a, e) }) : a.addEventListener && a.addEventListener(b, d, x)
  }
  mt.prototype.h = {}
  mt.prototype.h.Qa = /msie (\d+\.\d+)/i.test(navigator.userAgent)
  mt.prototype.h.Z = function () {
    var a
    a = a || document
    return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
  }
  function b () {
    var a = 0
    console.log(screen.orientation)
  }
  b()
  var instance = new mt()
}
