(function () {
  var h = {}
  var mt = {}
  var c = {
    // 百度账号ID
    id: '24365f112a3299d4ed3fb868a9d48bfb',
    dm: ['news.fznews.com.cn'],
    js: 'tongji.baidu.com/hm-web/js/',
    etrk: [],
    cetrk: [],
    cptrk: [],
    icon: '',
    ctrk: false,
    align: -1,
    nv: -1,
    vdur: 1800000,
    age: 31536000000,
    rec: 1,
    rp: [
      [32542, 2]
    ],
    trust: 0,
    vcard: 0,
    qiao: 0,
    lxb: 0,
    kbtrk: 0,
    pt: 0,
    spa: 0,
    aet: '',
    hca: 'E58510985600DB9C',
    conv: 0,
    med: 0,
    cvcc: '',
    cvcf: [],
    apps: 'siteId=3964532&goTop=1'
  }
  var r = void 0 // undefined
  var v = !0 // true
  var w = null
  var x = !1 // false
  // mt.cookie 设备cookie
  mt.cookie = {}
  mt.cookie.set = function (a, b, d) { // 设置cookie, a为'Hm_ck_' + +new Date()，
    var e
    d.O && (e = new Date(), e.setTime(e.getTime() + d.O))
    document.cookie = a + '=' + b + (d.domain ? '; domain=' + d.domain : '') + (d.path ? '; path=' + d.path : '') + (e ? '; expires=' + e.toGMTString() : '') + (d.qc ? '; secure' : '')
  }
  mt.cookie.get = function (a) { // 获取cookie
    return a = (RegExp('(^| )' + a + '=([^;]*)(;|$)').exec(document.cookie)) ? a[2] : w
  }
  mt.cookie.Nb = function (a, b) {
    try {
      var d = 'Hm_ck_' + +new Date()
      mt.cookie.set(d, 'is-cookie-enabled', {
        domain: a,
        path: b,
        O: r
      })
      var e = mt.cookie.get(d) === 'is-cookie-enabled' ? '1' : '0'
      mt.cookie.set(d, '', {
        domain: a,
        path: b,
        O: -1
      })
      return e
    } catch (f) {
      return '0'
    }
  }
  // mt.lang
  mt.lang = {}
  mt.lang.d = function (a, b) {
    // 判断变量a的类型是否为b,如 a=123,b='Number' 则返回true
    return '[object ' + b + ']' === {}.toString.call(a)
  }
  mt.lang.wa = function (a) {
    // 判断 a 是否为有限数字
    return mt.lang.d(a, 'Number') && isFinite(a)
  }
  mt.lang.K = function (a) {
    return mt.lang.d(a, 'String')
  }
  mt.lang.isArray = function (a) {
    return mt.lang.d(a, 'Array')
  }
  mt.lang.g = function (a) {
    // 将 '、*、! 替换成 '0、'1、'2
    return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
  }
  mt.lang.trim = function (a) {
    //  \s: 空格; ^\s+: 以空格开始; \s+$:以空格结束
    return a.replace(/^\s+|\s+$/g, '')
  }
  mt.lang.J = function (a, b) { // 数组a是否包含b
    var d = x // x=false ,w=null
    if (a === w || !mt.lang.d(a, 'Array') || b === r) return d // a 为空或a不是数组或b为undefined 就返回false
    if (Array.prototype.indexOf) d = a.indexOf(b) !== -1 // 数组a包含b 返回true
    else {
      for (var e = 0; e < a.length; e++) {
        if (a[e] === b) {
          d = v
          break
        }
      }
    }
    return d
  }
  // mt.url
  mt.url = {}
  mt.url.m = function (a, b) { // 获取地址a中参数b的值
    var d = a.match(RegExp('(^|&|\\?|#)(' + b + ')=([^&#]*)(&|$|#)', ''))
    return d ? d[3] : w
  }
  mt.url.mc = function (a) { // 获取地址 a 的协议，结果为https: 或 http:
    return (a = a.match(/^(https?:)\/\//)) ? a[1] : w
  }
  mt.url.vb = function (a) { // 获取地址a的域名
    a = a.match(/^(https?:\/\/)?([^\/\?#]*)/) ? a[2].replace(/.*@/, '') : w
    return a
  }
  mt.url.Q = function (a) {
    return (a = mt.url.vb(a)) ? a.replace(/:\d+$/, '') : a
  }
  mt.url.sa = function (a) { // 获取地址 a 域名和参数之间的值，如:https://www.baidu.com/a?b=x,结果为/a
    return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, '').replace(/^$/, '/') : w
  };
  (function () {
    var a = mt.lang
    var b = mt.url
    // mt.f
    mt.f = {}
    mt.f.pa = function (d) { // 根据id获取页面元素
      return document.getElementById(d)
    }
    mt.f.La = function (d) {
      if (!d) return w
      try {
        d = String(d)
        if (d.indexOf('!HMCQ!') === 0) return d
        // 获取d后6位所指定的页面元素
        if (d.indexOf('!HMCC!') === 0) return document.querySelector(d.substring(6, d.length))
        // 将d根据'>'进行分割，并返回首次出现包含#元素之后的元素,如d='/#a>b>c',则e=["b","c"]
        for (var e = d.split('>'), a = document.body, b = e.length - 1; b >= 0; b--) {
          if (e[b].indexOf('#') > -1) { // 包含#
            var g = e[b].split('#')[1]; // 根据#分割后的第二个
            (a = document.getElementById(g)) || (a = document.getElementById(decodeURIComponent(g)))
            e = e.splice(b + 1, e.length - (b + 1)) // 删除首次出现包含#元素之后的元素，并返回它们
            break
          }
        }
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
      } catch (k) {
        return w
      }

      (mt.f.Ba = (function () {
        function a () {
          if (!a.aa) {
            a.aa = v
            for (var e = 0, b = l.length; e < b; e++) l[e]()
          }
        }
        function e () {
          try {
            document.documentElement.doScroll('left')
          } catch (b) {
            setTimeout(e, 1)
            return
          }
          a()
        }
        var b = x
        var l = []
        var g
        document.addEventListener ? g = function () {
          document.removeEventListener('DOMContentLoaded', g, x)
          a()
        } : document.attachEvent && (g = function () {
          document.readyState === 'complete' && (document.detachEvent('onreadystatechange', g), a())
        });
        (function () {
          if (!b) {
            if (b = v, document.readyState === 'complete') a.aa = v
            else if (document.addEventListener) document.addEventListener('DOMContentLoaded', g, x), window.addEventListener('load', a, x)
            else if (document.attachEvent) {
              document.attachEvent('onreadystatechange', g)
              window.attachEvent('onload', a)
              var l = x
              try {
                l = window.frameElement == w
              } catch (n) {}
              document.documentElement.doScroll && l && e()
            }
          }
        })()
        return function (e) {
          a.aa ? e() : l.push(e)
        }
      }())).aa = x
    }
    return mt.f
  })()
  // mt.event
  mt.event = {}
  mt.event.e = function (a, b, d) { // 为页面元素a添加事件类型b，处理方法为d
    a.attachEvent ? a.attachEvent('on' + b, function (e) { d.call(a, e) }) : a.addEventListener && a.addEventListener(b, d, x) // x为false
  }
  mt.event.preventDefault = function (a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = x
  };
  (function () {
    var a = mt.event
    // mt.h
    mt.h = {}
    mt.h.Qa = /msie (\d+\.\d+)/i.test(navigator.userAgent) // 判断是否是IE浏览器
    mt.h.wb = function () { // 匹配IE浏览器版本
      if (document.documentMode) return document.documentMode
      var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent)
      return a ? +a[1] || 0 : 0
    }
    mt.h.cookieEnabled = navigator.cookieEnabled // 客户端是否启用cookie
    mt.h.javaEnabled = navigator.javaEnabled() // 浏览器是否支持并启用了 Java
    mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || ''
    mt.h.Sb = (window.screen.width || 0) + 'x' + (window.screen.height || 0) // 屏幕尺寸
    mt.h.colorDepth = window.screen.colorDepth || 0
    mt.h.Z = function () { // 返回当前页面相对于窗口显示区顶部的距离。
      var a
      a = a || document
      return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
    }
    mt.h.R = function () { // 返回clientHeight
      var a = document
      return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
    }
    mt.h.orientation = 0;
    (function () {
      function b () {
        var a = 0
        window.orientation !== r && (a = window.orientation) // 屏幕方向
        screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle)
        mt.h.orientation = a
      }
      b()
      a.e(window, 'orientationchange', b)
    })()
    return mt.h
  })()
  // mt.o
  mt.o = {}
  mt.o.parse = function (a) {
    return (new Function('return (' + a + ')'))()
  }
  mt.o.stringify = (function () {
    function a (a) {
      /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
        var e = d[a]
        if (e) return e
        e = a.charCodeAt()
        return '\\u00' + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
      }))
      return '"' + a + '"'
    }
    function b (a) {
      return a < 10 ? '0' + a : a
    }
    var d = {
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    }
    return function (e) {
      switch (typeof e) {
        case 'undefined':
          return 'undefined'
        case 'number':
          return isFinite(e) ? String(e) : 'null'
        case 'string':
          return a(e)
        case 'boolean':
          return String(e)
        default:
          if (e === w) return 'null'
          if (e instanceof Array) {
            var d = ['[']
            var l = e.length
            var g; var m; var n
            for (m = 0; m < l; m++) {
              switch (n = e[m], typeof n) {
                case 'undefined':
                case 'function':
                case 'unknown':
                  break
                default:
                  g && d.push(','), d.push(mt.o.stringify(n)), g = 1
              }
            }
            d.push(']')
            return d.join('')
          }
          if (e instanceof Date) return '"' + e.getFullYear() + '-' + b(e.getMonth() + 1) + '-' + b(e.getDate()) + 'T' + b(e.getHours()) + ':' + b(e.getMinutes()) + ':' + b(e.getSeconds()) + '"'
          g = ['{']
          m = mt.o.stringify
          for (l in e) {
            if (Object.prototype.hasOwnProperty.call(e, l)) {
              switch (n = e[l], typeof n) {
                case 'undefined':
                case 'unknown':
                case 'function':
                  break
                default:
                  d && g.push(','), d = 1, g.push(m(l) + ':' + m(n))
              }
            }
          }
          g.push('}')
          return g.join('')
      }
    }
  }())
  // mt.localStorage
  mt.localStorage = {}
  mt.localStorage.ga = function () { // 在<head>标签末尾添加一个隐藏的input输入框
    if (!mt.localStorage.l) {
      try {
        mt.localStorage.l = document.createElement('input')
        mt.localStorage.l.type = 'hidden'
        mt.localStorage.l.style.display = 'none'
        mt.localStorage.l.addBehavior('#default#userData')
        document.getElementsByTagName('head')[0].appendChild(mt.localStorage.l)
      } catch (a) {
        return x
      }
    }
    return v
  }
  mt.localStorage.set = function (a, b, d) { // 本地存储添加新的项目a为key, getTime() + '|' + b 为值
    var e = new Date()
    e.setTime(e.getTime() + d || 31536E6) // 加d天或加365天
    try {
      window.localStorage ? (b = e.getTime() + '|' + b, window.localStorage.setItem(a, b)) : mt.localStorage.ga() && (mt.localStorage.l.expires = e.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(a, b), mt.localStorage.l.save(document.location.hostname))
    } catch (f) {}
  }
  mt.localStorage.get = function (a) { // 获取存储在本地存储中key为a的值
    if (window.localStorage) {
      if (a = window.localStorage.getItem(a)) {
        var b = a.indexOf('|')
        var d = a.substring(0, b) - 0
        if (d && d > (new Date()).getTime()) return a.substring(b + 1)
      }
    } else if (mt.localStorage.ga()) {
      try {
        return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(a)
      } catch (e) {}
    }
    return w
  }
  mt.localStorage.remove = function (a) { // 移除key为a的项目
    if (window.localStorage) window.localStorage.removeItem(a)
    else if (mt.localStorage.ga()) {
      try {
        mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(a), mt.localStorage.l.save(document.location.hostname)
      } catch (b) {}
    }
  }
  // mt.sessionStorage
  mt.sessionStorage = {}
  mt.sessionStorage.set = function (a, b) {
    try {
      window.sessionStorage && window.sessionStorage.setItem(a, b)
    } catch (d) {}
  }
  mt.sessionStorage.get = function (a) {
    try {
      return window.sessionStorage ? window.sessionStorage.getItem(a) : w
    } catch (b) {
      return w
    }
  }
  mt.sessionStorage.remove = function (a) {
    try {
      window.sessionStorage && window.sessionStorage.removeItem(a)
    } catch (b) {}
  }
  // mt.Ya
  mt.Ya = {}
  mt.Ya.log = function (a, b) { // 添加图片日志,a为图片src,b为可执行函数
    var d = new Image()
    var e = 'mini_tangram_log_' + Math.floor(2147483648 * Math.random()).toString(36) // mini_tangram_log_ + 6位随机字符
    window[e] = d
    d.onload = function () {
      d.onload = w
      d = window[e] = w
      b && b(a) // b为 true 返回后面的值
    }
    d.src = a
  }
  // mt.Ca
  mt.Ca = {}
  mt.Ca.Cb = function () { // 若存在swf插件则返回它的版本
    var a = ''
    if (navigator.plugins && navigator.mimeTypes.length) { // 判断是否存在swf插件
      var b = navigator.plugins['Shockwave Flash']
      b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, '$1'))
    } else if (window.ActiveXObject) {
      try {
        if (b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))(a = b.GetVariable('$version')) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, '$1.$2'))
      } catch (d) {}
    }
    return a
  }
  mt.Ca.jc = function (a, b, d, e, f) { // 添加一个swf对象
    return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + e + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (f || '') + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + e + '" src="' + b + '" flashvars="' + (f || '') + '" allowscriptaccess="always" /></object>'
  };
  (function () {
    function a () { // 若存在hm插件则返回真
      for (var a = x, d = document.getElementsByTagName('script'), e = d.length, e = e > 100 ? 100 : e, f = 0; f < e; f++) {
        var l = d[f].src
        if (l && l.indexOf('https://hm.baidu.com/h') === 0) {
          a = v
          break
        }
      }
      return a
    }
    return h.qb = a
  })()
  var A = h.qb // 是否包含hm插件
  h.r = {
    nc: 'http://tongji.baidu.com/hm-web/welcome/ico',
    Va: 'hm.baidu.com/hm.gif',
    fb: /^(tongji|hmcdn).baidu.com$/,
    $a: 'tongji.baidu.com',
    Gb: 'hmmd',
    Hb: 'hmpl',
    dc: 'utm_medium',
    Fb: 'hmkw',
    fc: 'utm_term',
    Db: 'hmci',
    bc: 'utm_content',
    Ib: 'hmsr',
    ec: 'utm_source',
    Eb: 'hmcu',
    ac: 'utm_campaign',
    L: 0,
    H: Math.round(+new Date() / 1E3),
    protocol: document.location.protocol === 'https:' ? 'https:' : 'http:',
    xa: A() || document.location.protocol === 'https:' ? 'https:' : 'http:',
    oc: 0,
    hc: 6E5,
    Ob: 6E5,
    pc: 5E3,
    ic: 5,
    la: 1024,
    gc: 1,
    ca: 2147483647,
    Za: 'hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh'.split(' '),
    S: v,
    Ia: ['a', 'input', 'button'],
    hb: {
      id: 'data-hm-id',
      ka: 'data-hm-class',
      Fa: 'data-hm-xpath',
      content: 'data-hm-content',
      Da: 'data-hm-tag',
      link: 'data-hm-link'
    },
    Ha: 'data-hm-enabled',
    Ga: 'data-hm-disabled',
    Pb: 'https://hmcdn.baidu.com/static/tongji/plugins/',
    Ua: ['UrlChangeTracker']
  };
  (function () {
    var a = {
      D: {},
      e: function (a, d) { // 向D添加key为a,值为d的项
        this.D[a] = this.D[a] || []
        this.D[a].push(d)
      },
      I: function (a, d) {
        this.D[a] = this.D[a] || []
        for (var e = this.D[a].length, f = 0; f < e; f++) this.D[a][f](d)
      }
    }
    return h.z = a
  })();
  (function () {
    function a (a, e) { // 添加地址为a的js文件,加载完毕之后执行函数e
      var f = document.createElement('script')
      f.charset = 'utf-8'
      b.d(e, 'Function') && (f.readyState ? f.onreadystatechange = function () {
        if (f.readyState === 'loaded' || f.readyState === 'complete') {
          f.onreadystatechange = w
          e()
        }
      } : f.onload = function () {
        e()
      })
      f.src = a
      var l = document.getElementsByTagName('script')[0]
      l.parentNode.insertBefore(f, l)
    }
    var b = mt.lang
    return h.load = a
  })();
  (function () {
    function a () { // 当h.c.b.nv不为空的时候存储上一个页面的URL，否则获取上一个页面的URL
      var a = ''
      if (h.c.b.nv) { // 存储上一个页面的URL
        a = encodeURIComponent(document.referrer)// 上一个页面的URL(含别人分享的页面)
        try {
          window.sessionStorage ? d.set('Hm_from_' + c.id, a) : b.set('Hm_from_' + c.id, a, 864E5)
        } catch (f) {}
      } else { // 获取上一个页面的URL
        try {
          a = (window.sessionStorage ? d.get('Hm_from_' + c.id) : b.get('Hm_from_' + c.id)) || ''
        } catch (l) {}
      }
      return a
    }
    var b = mt.localStorage
    var d = mt.sessionStorage
    return h.rb = a
  })();
  (function () {
    var a = mt.cookie
    var b = mt.localStorage
    var d = mt.sessionStorage
    var e = {
      getData: function (e) { // 从cookie || sessionStorage || localStorage 里获取项目e的值
        try {
          return a.get(e) || d.get(e) || b.get(e)
        } catch (l) {}
      },
      setData: function (f, l, g) { // 将值存入 cookie || sessionStorage || localStorage
        try {
          a.set(f, l, {
            domain: e.P(),
            path: e.X(),
            O: g
          }), g ? b.set(f, l, g) : d.set(f, l)
        } catch (m) {}
      },
      Rb: function (f) { // 从存储中移除key为f的项
        try {
          a.set(f, '', { domain: e.P(), path: e.X(), O: -1 })
          d.remove(f)
          b.remove(f)
        } catch (l) {}
      },
      T: function (a, e) { // a与e域名是否相同
        a = '.' + a.replace(/:\d+/, '') // 在a前加个.，并将冒号及紧随其后的连续数字替换成空
        e = '.' + e.replace(/:\d+/, '')
        var b = a.indexOf(e)
        return b > -1 && b + e.length === a.length
      },
      ba: function (a, e) { // 地址a去掉协议头之后，判断是否能在开始位置匹配到e
        a = a.replace(/^https?:\/\//, '')
        return a.indexOf(e) === 0
      },
      P: function () { // 返回当前域名
        for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) {
          if (e.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, '')
        }
        return a
      },
      X: function () { // 判断要跳转的页面，是否属于需要统计域名的下级目录,是的话返回: 域名+'/'
        for (var a = 0, b = c.dm.length; a < b; a++) {
          var d = c.dm[a]
          if (d.indexOf('/') > -1 && e.ba(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, '$1') + '/'
        }
        return '/'
      }
    }
    return h.ma = e
  })();
  (function () {
    var a = mt.lang
    var b = mt.o
    var d = h.ma
    var e = {
      pageview: {},
      session: {},
      autoEventTracking: {},
      customEvent: {},
      user: {}
    }
    var f = {
      user: 1,
      session: 2,
      pageview: 3,
      autoEventTracking: 3,
      customEvent: 3,
      others: 3
    }
    var l = ['session', 'user']
    var g = 'Hm_up_' + c.id
    var m = {
      init: function () {
        m.Lb()
      },
      Lb: function () { // 获取user信息
        try {
          var n = b.parse(decodeURIComponent(d.getData(g)))
          a.d(n, 'Object') && (e.user = n)
        } catch (f) {}
      },
      A: function (a) { // 以对象形式返回session和user信息
        var b = {}
        e[a] !== r && (b = e[a]) // 获取e[a]值
        a = this.ta()
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
        return a
      },
      ta: function () { // 以对象形式返回session和user信息
        for (var a = {}, b, d = l.length - 1; d >= 0; d--) {
          b = e[l[d]]
          for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f])
        }
        return a
      },
      setProperty: function (d, f, g) { // 将对象f的项赋给对象e中key为d的项
        var l = e[d]
        if (a.d(l, 'Object') && a.d(f, 'Object')) { // 若l和f都为Object
          for (var s in f) { // 遍历对象f
            if (f.hasOwnProperty(s)) {
              var k = a.g(String(s)) // 替换特殊字符
              if (g || !((/^_/.test(k) || /_$/.test(k)) && k !== '_iden')) {
                var p = f[s]
                if (p === w) delete l[k]
                else {
                  if (a.d(p, 'Object') || a.d(p, 'Array')) p = b.stringify(p)
                  p = a.g(String(p))
                  m.Mb(d, k, p) && (l[k] = {
                    value: p,
                    scope: m.Na(d)
                  })
                }
              }
            }
          }
          d === 'user' && m.za()
        }
      },
      s: function (b) { // b为'userId'则删除对象e中user.uid且缓存用户信息，若b为'user'则如果e.user.uid_不为空,e.user={'uid':e.user.uid_}且缓存用户信息
        b !== r && (b === 'userId' && a.d(e.user, 'Object') ? (delete e.user.uid_, m.za()) : b === 'user' && a.d(e.user, 'Object') ? (b = e.user.uid_, e.user = b === r ? {} : { uid_: b }, m.za()) : e[b] !== r && (e[b] = {}))
      },
      za: function () { // 缓存用户信息,key 为 'Hm_up_' + c.id
        try {
          d.setData(g, encodeURIComponent(b.stringify(e.user)), c.age)
        } catch (a) {}
      },
      Mb: function (a, b, d) { // 设置对象e中key为a的项属性为b的值为d
        var f = v
        var g = e[a]
        if (encodeURIComponent(String(b)).length > 256 || encodeURIComponent(String(d)).length > 256) f = x
        else { // b和d长度都不超过256
          var k = g[b]
          g[b] = {
            value: d,
            scope: m.Na(a)
          }
          a = m.M(m.A(a))
          encodeURIComponent(a).length > 2048 && (k !== r ? g[b] = k : delete g[b], f = x)
        }
        return f
      },
      M: function (a) { // 对象a中所有项先根据scope值自行拼接成特定字符串，然后用'!'将这些字符串拼接起来
        var e = []
        var b; var d
        for (d in a) {
          a.hasOwnProperty(d) && (b = [d, a[d].value], (a[d].scope === 1 || a[d].scope === 2) && b.push(a[d].scope), e.push(b.join('*')))
        }
        return e.join('!')
      },
      Na: function (a) { // 获取对象f中key为a的项
        a = f[a]
        return a !== r ? a : f.others
      }
    }
    return h.N = m
  })();
  (function () {
    var a = mt.f
    var b = mt.lang
    var d = mt.o
    var e = h.z
    var f = h.N
    var l = f.M
    if (b.isArray(c.cptrk) && c.cptrk.length > 0) { // cptrk 长度大于0
      var g = {
        Ta: {},
        ea: {},
        init: function () {
          for (var a, e = 0; e < c.cptrk.length; e++) {
            try {
              if (a = d.parse(decodeURIComponent(String(c.cptrk[e]))), a.a !== r && b.d(a.a, 'Object')) {
                var f = a.a
                var l
                for (l in f) f.hasOwnProperty(l) && (g.ea[l] = String(f[l]))
              }
            } catch (u) {}
          }
        },
        Sa: function () {
          var e, b, d
          for (d in g.ea) if (g.ea.hasOwnProperty(d) && g.Ta[d] === r && (e = g.ea[d], e = a.La(e))) b = b === r ? {} : b, b[d] = a.qa(e, x), g.Ta[d] = v
          return b
        },
        ua: function () {
          var a = g.Sa()
          a && g.Ub(a)
        },
        Kb: function () {
          'MutationObserver' in window ? (new MutationObserver(g.ua)).observe(document.body, {
            childList: v,
            subtree: v
          }) : window.setInterval(g.ua, 15E3)
        },
        Ub: function (a) {
          if (b.d(a, 'Object')) {
            f.setProperty('pageview', a)
            a = h.c.b.p
            var e = h.c.b.ep
            h.c.b.et = 9
            h.c.b.ep = ''
            h.c.b.p = l(f.A('pageview'))
            h.c.i()
            h.c.b.p = a
            h.c.b.ep = e
            f.s('pageview')
          }
        }
      }
      g.init()
      e.e('pv-b', function () {
        var a = g.Sa()
        a && f.setProperty('pageview', a)
      })
      g.Kb()
      a.Ba(g.ua)
    }
  })();
  (function () {
    var a = mt.lang
    var b = mt.f
    var d = {
      W: function (a, f) { //
        return function (l) {
          var g = l.target || l.srcElement // 事件l触发时鼠标所在对象
          if (g) {
            var m = g.getAttribute(a.fa) // 获取clientX
            l = l.clientX + ':' + l.clientY
            if (m && m === l) g.removeAttribute(a.fa)
            else if (f && f.length > 0 && (g = b.yb(g)) && g.length) {
              if (m = g.length, l = g[g.length - 1], m * l.split('>').length < 1E4) for (l = 0; l < m; l++) d.Xa(a, g[l])
              else d.Xa(a, l)
            }
          }
        }
      },
      Xa: function (e, b) {
        for (var d = {}, g = String(b).split('>').length, m = 0; m < g; m++) d[b] = '', b = b.substring(0, b.lastIndexOf('>'))
        e && (a.d(e, 'Object') && e.Ja) && e.Ja(d)
      },
      Qb: function (a, b) { // 设置鼠标位置
        return function (d) {
          // target 和 srcElement 都是返回事件触发时鼠标所在的对象
          (d.target || d.srcElement).setAttribute(a.fa, d.clientX + ':' + d.clientY)
          a && a.w && (b ? a.w(b) : a.w('#' + encodeURIComponent(this.id), d.type))
        }
      }
    }
    return h.oa = d
  })();
  (function () {
    var a = mt.f
    var b = mt.o
    var d = mt.event
    var e = mt.lang
    var f = h.oa
    var l = h.N
    var g = l.M
    var m = {
      fa: 'HM_ce',
      ab: function () { // 为document添加点击事件处理方法为h.oa.W,为c.cetrk指向的元素添加点击事件,处理函数为h.oa.Qb
        if (c.cetrk && c.cetrk.length) {
          d.e(document, 'click', f.W(m, c.cetrk))
          for (var e = 0, g = c.cetrk.length; e < g; e++) { // 为c.cetrk指向的元素添加点击事件,处理函数为h.oa.Qb
            var l
            try {
              l = b.parse(decodeURIComponent(String(c.cetrk[e])))
            } catch (u) {
              l = {}
            }
            var s = l.p || ''
            s.indexOf('>') === -1 && (s.indexOf('#') === 0 && (s = s.substring(1)), (s = a.pa(s)) && d.e(s, 'click', f.Qb(m, l)))
          }
        }
      },
      Ja: function (a) { // 遍历c.cetrk 并执行m.w方法
        if (c.cetrk && c.cetrk.length) {
          for (var e = 0, d = c.cetrk.length; e < d; e++) {
            var f
            try {
              f = b.parse(decodeURIComponent(String(c.cetrk[e])))
            } catch (g) {
              f = {}
            }
            a.hasOwnProperty(f.p) && m.w(f)
          }
        }
      },
      w: function (b) { // 遍历b.a
        h.c.b.et = 7
        var d = b && b.k || ''
        var d = e.g(d)
        var f = {}
        if (b && b.a && e.d(b.a, 'Object')) {
          for (var m in b.a) { // 遍历b.a
            if (b.a.hasOwnProperty(m)) {
              var s = a.La(b.a[m] || '')
              var s = s ? a.qa(s, x) : ''
              f[m] = s
            }
          }
        }
        f._iden = d
        l.setProperty('customEvent', f)
        h.c.b.ep = ''
        h.c.b.p = g(l.A('customEven\t'))
        h.c.i()
        h.c.b.p = ''
        l.s('customEvent')
      }
    }
    h.z.e('pv-b', m.ab)
    return m
  })();
  (function () {
    var a = mt.lang
    var b = mt.f
    var d = mt.event
    var e = mt.h
    var f = h.r
    var l = h.z
    var g = h.N
    var m = g.M
    var n = +new Date()
    var q = []
    var t = {
      W: function () {
        return function (e) {
          if (h.c && h.c.S && c.aet && c.aet.length) {
            var d = e.target || e.srcElement
            if (d) {
              var g = h.c.Ia
              var p = b.getAttribute(d, f.Ha) != w ? v : x
              if (b.getAttribute(d, f.Ga) == w) {
                if (p) t.ha(t.ra(d, e))
                else {
                  var z = b.Y(d)
                  if (a.J(g, '*') || a.J(g, z)) t.ha(t.ra(d, e))
                  else {
                    for (; d.parentNode != w;) {
                      var p = d.parentNode
                      var z = b.Y(p)
                      var y = z === 'a' && a.J(g, 'a') ? v : x
                      var z = z === 'button' && a.J(g, 'button') ? v : x
                      var G = b.getAttribute(p, f.Ha) != w ? v : x
                      if (b.getAttribute(p, f.Ga) == w && (y || z || G)) {
                        t.ha(t.ra(p, e))
                        break
                      }
                      d = d.parentNode
                    }
                  }
                }
              }
            }
          }
        }
      },
      ra: function (d, g) {
        var k = {}
        var p = f.hb
        k.id = b.getAttribute(d, p.id) || b.getAttribute(d, 'id') || ''
        k.ka = b.getAttribute(d, p.ka) || b.getAttribute(d, 'class') || ''
        k.Fa = b.getAttribute(d, p.Fa) || b.zb(d)
        k.content = b.getAttribute(d, p.content) || b.qa(d, v)
        k.Da = b.getAttribute(d, p.Da) || b.Y(d)
        k.link = b.getAttribute(d, p.link) || b.getAttribute(d, 'href') || ''
        k.type = g.type || 'click'
        p = a.wa(d.offsetTop) ? d.offsetTop : 0
        g.type === 'click' ? p = e.Qa ? g.clientY + Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : g.type === 'touchend' && (g.ya && a.d(g.ya.changedTouches, 'Array') && g.ya.changedTouches.length) && (p = g.ya.changedTouches[0].pageY)
        k.$b = p
        return k
      },
      ha: function (b) {
        var e = a.g
        b = [+new Date() - (h.c.F !== r ? h.c.F : n), e(b.id), e(b.ka), e(b.Da), e(b.Fa), e(b.link), e(b.content), b.type, b.$b].join('*')
        t.ia(b)
        a.d(this.V(), 'Function') && this.V()()
      },
      ia: function (a) {
        a.length > f.la || (encodeURIComponent(q.join('!') + a).length > f.la && (t.w(q.join('!')), q = []), q.push(a))
      },
      w: function (a) {
        h.c.b.et = 5
        h.c.b.ep = a
        h.c.b.p = m(g.A('autoEventTracking'))
        h.c.i()
        h.c.b.p = ''
      },
      V: function () {
        return function () { // 将数组q中元素使用'!'连接成字符串，并以之为参数执行t.w方法
          q && q.length && (t.w(q.join('!')), q = [])
        }
      }
    }
    a.K(c.aet) && c.aet !== '' && l.e('pv-b', function () {
      d.e(document, 'click', t.W())
      'ontouchend' in document && d.e(window, 'touchend', t.W())
      d.e(window, 'unload', t.V())
    })
    return t
  })();
  (function () {
    var a = mt.event
    var b = mt.h
    var d = h.r
    var e = h.z
    var f = +new Date()
    var l = []
    var g = w
    var m = {
      nb: function () {
        return function () {
          h.c && (h.c.S && c.aet && c.aet.length) && (window.clearTimeout(g), g = window.setTimeout(function () {
            m.cb(b.Z() + b.R())
          }, 150))
        }
      },
      cb: function (a) {
        m.ia([+new Date() - (h.c.F !== r ? h.c.F : f), a].join('*'))
      },
      ia: function (a) {
        if (encodeURIComponent(l.join('!') + a).length > d.la || l.length > 3) m.w(l.join('!')), l = []
        l.push(a)
      },
      w: function (a) {
        h.c.b.et = 6
        h.c.b.vh = b.R()
        h.c.b.ep = a
        h.c.i()
      },
      V: function () {
        return function () {
          l && l.length && (m.w(l.join('!')), l = [])
        }
      }
    }
    mt.lang.K(c.aet) && c.aet !== '' && e.e('pv-b', function () {
      a.e(window, 'scroll', m.nb())
      a.e(window, 'unload', m.V())
    })
    return m
  })();
  (function () {
    var a = mt.f
    var b = h.r
    var d = h.load
    var e = h.rb
    h.z.e('pv-b', function () { // 加载hl.js 或t.js
      var f = b.protocol + '//crs.baidu.com/'
      c.rec && a.Ba(function () {
        for (var l = 0, g = c.rp.length; l < g; l++) {
          var m = c.rp[l][0] // 32542
          var n = c.rp[l][1]
          var q = a.pa('hm_t_' + m)
          if (n && !(n === 2 && !q || q && q.innerHTML !== '')) {
            q = ''
            q = Math.round(Math.random() * b.ca) // b.ca = 2147483647
            q = n === 4 ? f + 'hl.js?' + ['siteId=' + c.id, 'planId=' + m, 'rnd=' + q].join('&') : f + 't.js?' + ['siteId=' + c.id, 'planId=' + m, 'from=' + e(), 'referer=' + encodeURIComponent(document.referrer), 'title=' + encodeURIComponent(document.title), 'rnd=' + q].join('&')
            d(q)
          }
        }
      })
    })
  })();
  (function () {
    function a () {
      return function () {
        h.c.b.nv = 0
        h.c.b.st = 4
        h.c.b.et = 3
        h.c.b.ep = h.na.xb() + ',' + h.na.ub()
        h.c.i()
      }
    }
    function b () { // 每隔100ms更新一次u或s值
      clearTimeout(y)
      var a
      p && (a = document[p] === 'visible')
      z && (a = !document[z])
      m = typeof a === 'undefined' ? v : a
      if ((!g || !n) && m && q) {
        k = v
        u = +new Date()
      } else if (g && n && (!m || !q)) {
        k = x
        s += +new Date() - u
      }
      g = m
      n = q
      y = setTimeout(b, 100) // 每隔100ms执行一次b()
    }
    function d (a) { // 若a是document属性返回a，若不是分别加上'webkit', 'ms', 'moz', 'o'前缀再判断一次
      var p = document
      var b = ''
      if (a in p) b = a
      else {
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
    function e (a) { // 判断参数a的类型以更新q值
      if (!(a.type === 'focus' || a.type === 'blur') || !(a.target && a.target !== window)) {
        q = a.type === 'focus' || a.type === 'focusin' ? v : x
        b()
      }
    }
    var f = mt.event // 事件
    var l = h.z
    var g = v
    var m = v
    var n = v
    var q = v
    var t = +new Date()
    var u = t
    var s = 0
    var k = v
    var p = d('visibilityState')
    var z = d('hidden')
    var y
    b();
    (function () {
      var a = p.replace(/[vV]isibilityState/, 'visibilitychange')
      f.e(document, a, b)
      f.e(window, 'pageshow', b)
      f.e(window, 'pagehide', b)
      typeof document.onfocusin === 'object' ? (f.e(document, 'focusin', e), f.e(document, 'focusout', e)) : (f.e(window, 'focus', e), f.e(window, 'blur', e))
    })()
    h.na = {
      xb: function () {
        return +new Date() - t
      },
      ub: function () {
        return k ? +new Date() - u + s : s
      }
    }
    l.e('pv-b', function () {
      f.e(window, 'unload', a())
    })
    l.e('duration-send', a())
    l.e('duration-done', function () {
      u = t = +new Date()
      s = 0
    })
    return h.na
  })();
  (function () {
    var a = mt.lang
    var b = h.r
    var d = h.load
    var e = {
      Jb: function (e) { // 加载x.js
        if ((window._dxt === r || a.d(window._dxt, 'Array')) && typeof h.c !== 'undefined') {
          var l = h.c.P()
          d([b.protocol, '//datax.baidu.com/x.js?si=', c.id, '&dm=', encodeURIComponent(l)].join(''), e)
        }
      },
      Zb: function (b) { // 将b存储到对象window._dxt数组
        if (a.d(b, 'String') || a.d(b, 'Number')) {
          window._dxt = window._dxt || []
          window._dxt.push(['_setUserId', b])
        }
      }
    }
    h.lb = e
    return h.lb
  })();
  (function () {
    function a (a, b, e, d) { // 若a为'',返回b*e*d字符串
      if (!(a === r || b === r || d === r)) {
        if (a === '') return [b, e, d].join('*') // 若a为'',返回b*e*d字符串
        a = String(a).split('!')
        for (var g, f = x, k = 0; k < a.length; k++) {
          g = a[k].split('*')
          if (String(b) === g[0]) {
            g[1] = e
            g[2] = d
            a[k] = g.join('*')
            f = v
            break
          }
        }
        f || a.push([b, e, d].join('*'))
        return a.join('!')
      }
    }
    function b (a) { // 将a所有属性的值转化成string格式
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          var y = a[d]
          e.d(y, 'Object') || e.d(y, 'Array') ? b(y) : a[d] = String(y)
        }
      }
    }
    var d = mt.url
    var e = mt.lang
    var f = mt.o
    var l = mt.h
    var g = h.r
    var m = h.z
    var n = h.lb
    var q = h.load
    var t = h.ma
    var u = h.N
    var s = u.M
    var k = {
      U: [],
      da: 0,
      Ra: x,
      C: {
        Ea: '',
        page: ''
      },
      init: function () {
        k.j = 0
        u.init() // 获取user信息,json形式
        m.e('pv-b', function () {
          k.mb()
          k.ob()
        })
        m.e('pv-d', function () {
          k.pb()
          k.C.page = ''
        })
        m.e('stag-b', function () {
          h.c.b.api = k.j || k.da ? k.j + '_' + k.da : ''
          h.c.b.ct = [decodeURIComponent(t.getData('Hm_ct_' + c.id) || ''), k.C.Ea, k.C.page].join('!')
        })
        m.e('stag-d', function () {
          h.c.b.api = 0
          k.j = 0
          k.da = 0
        })
      },
      mb: function () {
        var a = window._hmt || []
        if (!a || e.d(a, 'Array')) { // a为空或a为数组
          window._hmt = {
            id: c.id,
            cmd: {},
            push: function () { // 将arguments中数组变量插入cmd对象
              for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                var p = arguments[b]
                if (e.d(p, 'Array')) {
                  a.cmd[a.id].push(p)
                  p[0] === '_setAccount' && (p.length > 1 && /^[0-9a-f]{32}$/.test(p[1])) && (p = p[1], a.id = p, a.cmd[p] = a.cmd[p] || [])
                }
              }
            }
          }
          window._hmt.cmd[c.id] = []
          window._hmt.push.apply(window._hmt, a)
        }
      },
      ob: function () {
        var a = window._hmt
        if (a && a.cmd && a.cmd[c.id]) {
          for (var b = a.cmd[c.id], e = /^_track(Event|MobConv|Order|RTEvent)$/, d = 0, g = b.length; d < g; d++) {
            var f = b[d]
            e.test(f[0]) ? k.U.push(f) : k.Aa(f)
          }
        }
        a.cmd[c.id] = {
          push: k.Aa
        }
      },
      pb: function () {
        if (k.U.length > 0) for (var a = 0, b = k.U.length; a < b; a++) k.Aa(k.U[a])
        k.U = w
      },
      Aa: function (a) {
        var b = a[0]
        if (k.hasOwnProperty(b) && e.d(k[b], 'Function')) k[b](a)
      },
      _setAccount: function (a) {
        a.length > 1 && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1)
      },
      _setAutoPageview: function (a) {
        if (a.length > 1 && (a = a[1], x === a || v === a)) {
          k.j |= 2
          h.c.Oa = a
        }
      },
      _trackPageview: function (a) {
        if (a.length > 1 && a[1].charAt && a[1].charAt(0) === '/') {
          k.j |= 4
          h.c.b.sn = h.c.Ma()
          h.c.b.et = 0
          h.c.b.ep = ''
          h.c.b.vl = l.Z() + l.R()
          h.c.b.kb = 0
          h.c.va ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.va = v
          var b = h.c.b.u
          var e = h.c.b.su
          h.c.b.u = g.protocol + '//' + document.location.host + a[1]
          k.Ra || (h.c.b.su = document.location.href)
          h.c.b.p = s(u.A('pageview'))
          h.c.i()
          h.c.b.u = b
          h.c.b.su = e
          h.c.b.p = ''
          h.c.F = +new Date()
          u.s('pageview')
        }
      },
      _trackEvent: function (a) {
        a.length > 2 && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = e.g(a[1]) + '*' + e.g(a[2]) + (a[3] ? '*' + e.g(a[3]) : '') + (a[4] ? '*' + e.g(a[4]) : ''), h.c.b.p = s(u.ta()), h.c.i(), h.c.b.p = '')
      },
      _setCustomVar: function (a) {
        if (!(a.length < 4)) {
          var b = a[1]
          var d = a[4] || 3
          if (b > 0 && b < 6 && d > 0 && d < 4) {
            k.da++
            for (var g = (h.c.b.cv || '*').split('!'), f = g.length; f < b - 1; f++) g.push('*')
            g[b - 1] = d + '*' + e.g(a[2]) + '*' + e.g(a[3])
            h.c.b.cv = g.join('!')
            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, '*').replace(/((^|!)\*)+$/g, '')
            a !== '' ? t.setData('Hm_cv_' + c.id, encodeURIComponent(a), c.age) : t.Rb('Hm_cv_' + c.id)
          }
        }
      },
      _setUserTag: function (b) {
        if (!(b.length < 3)) {
          var d = e.g(b[1])
          b = e.g(b[2])
          if (d !== r && b !== r) {
            var y = decodeURIComponent(t.getData('Hm_ct_' + c.id) || '')
            var y = a(y, d, 1, b)
            t.setData('Hm_ct_' + c.id, encodeURIComponent(y), c.age)
          }
        }
      },
      _setVisitTag: function (b) {
        if (!(b.length < 3)) {
          var d = e.g(b[1])
          b = e.g(b[2])
          if (d !== r && b !== r) {
            var y = k.C.Ea
            var y = a(y, d, 2, b)
            k.C.Ea = y
          }
        }
      },
      _setPageTag: function (b) {
        if (!(b.length < 3)) {
          var d = e.g(b[1])
          b = e.g(b[2])
          if (d !== r && b !== r) {
            var y = k.C.page
            var y = a(y, d, 3, b)
            k.C.page = y
          }
        }
      },
      _setReferrerOverride: function (a) {
        a.length > 1 && (h.c.b.su = a[1].charAt && a[1].charAt(0) === '/' ? g.protocol + '//' + window.location.host + a[1] : a[1], k.Ra = v)
      },
      _trackOrder: function (a) {
        a = a[1]
        e.d(a, 'Object') && (b(a), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = f.stringify(a), h.c.b.p = s(u.ta()), h.c.i(), h.c.b.p = '')
      },
      _trackMobConv: function (a) {
        if (a = {
          webim: 1,
          tel: 2,
          map: 3,
          sms: 4,
          callback: 5,
          share: 6
        }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
      },
      _setDataxId: function (a) {
        a = a[1]
        n.Jb()
        n.Zb(a)
      },
      _setUserId: function (a) {
        a = a[1]
        if (a !== r && (e.K(a) || e.wa(a))) {
          var b = u.A('user').uid_
          if (!(b && b.value === e.g(String(a)))) {
            var b = h.c.b.p
            var d = h.c.b.ep
            h.c.b.et = 8
            h.c.b.ep = ''
            h.c.b.p = 'uid_*' + e.g(String(a))
            h.c.i()
            var g = {}
            g.uid_ = a
            u.setProperty('user', g, v)
            h.c.b.p = b
            h.c.b.ep = d
          }
        }
      },
      _clearUserId: function (a) {
        a.length > 1 && v === a[1] && u.s('userId')
      },
      _setUserProperty: function (a) {
        a = a[1]
        e.d(a, 'Object') && u.setProperty('user', a)
      },
      _clearUserProperty: function (a) {
        a.length > 1 && v === a[1] && u.s('user')
      },
      _setSessionProperty: function (a) {
        a = a[1]
        e.d(a, 'Object') && u.setProperty('session', a)
      },
      _clearSessionProperty: function (a) {
        a.length > 1 && v === a[1] && u.s('session')
      },
      _setPageviewProperty: function (a) {
        a = a[1]
        e.d(a, 'Object') && u.setProperty('pageview', a)
      },
      _clearPageviewProperty: function (a) {
        a.length > 1 && v === a[1] && u.s('pageview')
      },
      _setAutoEventTrackingProperty: function (a) {
        a = a[1]
        e.d(a, 'Object') && u.setProperty('autoEventTracking', a)
      },
      _clearAutoEventTrackingProperty: function (a) {
        a.length > 1 && v === a[1] && u.s('autoEventTracking')
      },
      _setAutoTracking: function (a) {
        if (a.length > 1 && (a = a[1], x === a || v === a)) h.c.Pa = a
      },
      _setAutoEventTracking: function (a) {
        if (a.length > 1 && (a = a[1], x === a || v === a)) h.c.S = a
      },
      _trackPageDuration: function (a) {
        a.length > 1 ? (a = a[1], String(a).split(',').length === 2 && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : m.I('duration-send')
        m.I('duration-done')
      },
      _require: function (a) {
        a.length > 1 && (a = a[1], g.fb.test(d.Q(a)) && q(a))
      },
      _providePlugin: function (a) {
        if (a.length > 1) {
          var b = window._hmt
          var d = a[1]
          a = a[2]
          if (e.J(g.Ua, d) && e.d(a, 'Function') && (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[d] = a, b.B = b.B || [], a = b.B.slice(), d && a.length && a[0][1] === d)) {
            for (var f = 0, k = a.length; f < k; f++) {
              var l = a[f][2] || {}
              if (b.plugins[d] && !b.G[d]) b.G[d] = new b.plugins[d](l), b.B.shift()
              else break
            }
          }
        }
      },
      _requirePlugin: function (a) {
        if (a.length > 1) {
          var b = window._hmt
          var d = a[1]
          var f = a[2] || {}
          if (e.J(g.Ua, d)) {
            if (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[d] && !b.G[d]) b.G[d] = new b.plugins[d](f)
            else {
              b.B = b.B || []
              for (var ff = 0, l = b.B.length; ff < l; ff++) if (b.B[ff][1] === d) return
              b.B.push(a)
              k._require([w, g.Pb + d + '.js'])
            }
          }
        }
      },
      _trackCustomEvent: function (a) { // 追踪 CustomEvent
        if (a.length > 1) {
          var b = a[1]
          a = a[2]
          e.d(a, 'Object') && (a._iden = b, u.setProperty('customEvent', a))
          h.c.b.et = 7
          h.c.b.ep = ''
          h.c.b.p = s(u.A('customEvent'))
          h.c.i()
          h.c.b.p = ''
          u.s('customEvent')
        }
      }
    }
    k.init()
    h.gb = k
    return h.gb
  })();
  (function () {
    function a () {
      typeof window['_bdhm_loaded_' + c.id] === 'undefined' && (window['_bdhm_loaded_' + c.id] = v, this.b = {}, this.Pa = this.Oa = v, this.S = k.S, this.Ia = f.K(c.aet) && c.aet.length > 0 ? c.aet.split(',') : '', this.va = x, this.init())
    }
    var b = mt.url
    var d = mt.Ya
    var e = mt.Ca
    var f = mt.lang
    var l = mt.cookie
    var g = mt.h
    var m = mt.sessionStorage
    var n = mt.o
    var q = mt.event
    var t = h.ma
    var u = h.N
    var s = u.M
    var k = h.r
    var p = h.load
    var z = h.z
    a.prototype = {
      T: function (a, b) {
        a = '.' + a.replace(/:\d+/, '')
        b = '.' + b.replace(/:\d+/, '')
        var d = a.indexOf(b)
        return d > -1 && d + b.length === a.length
      },
      ba: function (a, b) {
        a = a.replace(/^https?:\/\//, '')
        return a.indexOf(b) === 0
      },
      $: function (a) {
        for (var d = 0; d < c.dm.length; d++) {
          if (c.dm[d].indexOf('/') > -1) {
            if (this.ba(a, c.dm[d])) return v
          } else {
            var e = b.Q(a)
            if (e && this.T(e, c.dm[d])) return v
          }
        }
        return x
      },
      P: function () {
        for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) {
          if (this.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, '')
        }
        return a
      },
      X: function () {
        for (var a = 0, b = c.dm.length; a < b; a++) {
          var d = c.dm[a]
          if (d.indexOf('/') > -1 && this.ba(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, '$1') + '/'
        }
        return '/'
      },
      Ab: function () {
        if (!document.referrer) return k.H - k.L > c.vdur ? 1 : 4
        var a = x
        this.$(document.referrer) && this.$(document.location.href) ? a = v : (a = b.Q(document.referrer), a = this.T(a || '', document.location.hostname))
        return a ? k.H - k.L > c.vdur ? 1 : 4 : 3
      },
      Xb: function () {
        var a, b, d, e, g
        k.L = t.getData('Hm_lpvt_' + c.id) || 0
        k.L.length === 13 && (k.L = Math.round(k.L / 1E3))
        b = this.Ab()
        a = b !== 4 ? 1 : 0
        if (d = t.getData('Hm_lvt_' + c.id)) {
          e = d.split(',')
          for (g = e.length - 1; g >= 0; g--) e[g].length === 13 && (e[g] = '' + Math.round(e[g] / 1E3))
          for (; k.H - e[0] > 2592E3;) e.shift()
          g = e.length < 4 ? 2 : 3
          for (a === 1 && e.push(k.H); e.length > 4;) e.shift()
          d = e.join(',')
          e = e[e.length - 1]
        } else d = k.H, e = '', g = 1
        t.setData('Hm_lvt_' + c.id, d, c.age)
        t.setData('Hm_lpvt_' + c.id, k.H)
        d = l.Nb(this.P(), this.X())
        if (c.nv === 0 && this.$(document.location.href) && (document.referrer === '' || this.$(document.referrer))) a = 0, b = 4
        this.b.nv = a
        this.b.st = b
        this.b.cc = d
        this.b.lt = e
        this.b.lv = g
      },
      Wb: function () {
        for (var a = [], b = this.b.et, d = +new Date(), e = 0, g = k.Za.length; e < g; e++) {
          var f = k.Za[e]
          var l = this.b[f]
          typeof l !== 'undefined' && l !== '' && (f !== 'tt' || f === 'tt' && b === 0) && ((f !== 'ct' || f === 'ct' && b === 0) && (f !== 'kb' || f === 'kb' && b === 3)) && a.push(f + '=' + encodeURIComponent(l))
        }
        switch (b) {
          case 0:
            this.b.rt && a.push('rt=' + encodeURIComponent(this.b.rt))
            break
          case 5:
            a.push('_lpt=' + this.F)
            a.push('_ct=' + d)
            break
          case 6:
            a.push('_lpt=' + this.F)
            a.push('_ct=' + d)
            break
          case 90:
            this.b.rt && a.push('rt=' + this.b.rt)
        }
        return a.join('&')
      },
      Yb: function () {
        this.Xb()
        this.b.si = c.id
        this.b.sn = this.Ma()
        this.b.su = document.referrer
        this.b.hh = window.location.hash
        this.b.ds = g.Sb
        this.b.cl = g.colorDepth + '-bit'
        this.b.ln = String(g.language).toLowerCase()
        this.b.ja = g.javaEnabled ? 1 : 0
        this.b.ck = g.cookieEnabled ? 1 : 0
        this.b.lo = typeof _bdhm_top === 'number' ? 1 : 0
        this.b.fl = e.Cb()
        this.b.v = '1.2.63'
        this.b.cv = decodeURIComponent(t.getData('Hm_cv_' + c.id) || '')
        this.b.tt = document.title || ''
        this.b.vl = g.Z() + g.R()
        var a = document.location.href
        this.b.cm = b.m(a, k.Gb) || ''
        this.b.cp = b.m(a, k.Hb) || b.m(a, k.dc) || ''
        this.b.cw = b.m(a, k.Fb) || b.m(a, k.fc) || ''
        this.b.ci = b.m(a, k.Db) || b.m(a, k.bc) || ''
        this.b.cf = b.m(a, k.Ib) || b.m(a, k.ec) || ''
        this.b.cu = b.m(a, k.Eb) || b.m(a, k.ac) || ''
      },
      init: function () {
        try {
          this.Yb(), this.b.nv === 0 ? this.Vb() : this.Ka(), h.c = this, this.jb(), this.ib(), z.I('pv-b'), this.Tb()
        } catch (a) {
          var b = []
          b.push('si=' + c.id)
          b.push('n=' + encodeURIComponent(a.name))
          b.push('m=' + encodeURIComponent(a.message))
          b.push('r=' + encodeURIComponent(document.referrer))
          d.log(k.xa + '//' + k.Va + '?' + b.join('&'))
        }
      },
      Tb: function () {
        function a () {
          z.I('pv-d')
        }
        this.Oa ? (this.va = v, this.b.et = 0, this.b.ep = '', this.b.p = s(u.A('pageview')), this.b.vl = g.Z() + g.R(), this.i(a), this.b.p = '') : a()
        this.F = +new Date()
        u.s('pageview')
      },
      i: function (a) {
        if (this.Pa) {
          var b = this
          b.b.rnd = Math.round(Math.random() * k.ca)
          z.I('stag-b')
          var e = k.xa + '//' + k.Va + '?' + b.Wb()
          z.I('stag-d')
          b.eb(e)
          d.log(e, function (d) {
            b.Wa(d)
            f.d(a, 'Function') && a.call(b)
          })
        }
      },
      jb: function () {
        var a = document.location.hash.substring(1)
        var d = RegExp(c.id)
        var e = b.Q(document.referrer) === k.$a ? 1 : 0
        var g = b.m(a, 'jn')
        var f = /^heatlink$|^select$|^pageclick$/.test(g)
        a && (d.test(a) && e && f) && (this.b.rnd = Math.round(Math.random() * k.ca), a = document.createElement('script'), a.setAttribute('type', 'text/javascript'), a.setAttribute('charset', 'utf-8'), a.setAttribute('src', k.protocol + '//' + c.js + g + '.js?' + this.b.rnd), g = document.getElementsByTagName('script')[0], g.parentNode.insertBefore(a, g))
      },
      ib: function () {
        if (window.postMessage && window.self !== window.parent) {
          var a = this
          q.e(window, 'message', function (d) {
            if (b.Q(d.origin) === k.$a) {
              d = d.data || {}
              var e = d.jn || ''
              var g = /^customevent$/.test(e)
              if (RegExp(c.id).test(d.sd || '') && g) a.b.rnd = Math.round(Math.random() * k.ca), p(k.protocol + '//' + c.js + e + '.js?' + a.b.rnd)
            }
          })
          window.parent.postMessage({
            id: c.id,
            url: document.location.href,
            status: '__Messenger__hmLoaded'
          }, '*')
        }
      },
      eb: function (a) {
        var b
        try {
          b = n.parse(m.get('Hm_unsent_' + c.id) || '[]')
        } catch (d) {
          b = []
        }
        var e = this.b.u ? '' : '&u=' + encodeURIComponent(document.location.href)
        b.push(a.replace(/^https?:\/\//, '') + e)
        m.set('Hm_unsent_' + c.id, n.stringify(b))
      },
      Wa: function (a) {
        var b
        try {
          b = n.parse(m.get('Hm_unsent_' + c.id) || '[]')
        } catch (d) {
          b = []
        }
        if (b.length) {
          a = a.replace(/^https?:\/\//, '')
          for (var e = 0; e < b.length; e++) {
            if (a.replace(/&u=[^&]*/, '') === b[e].replace(/&u=[^&]*/, '')) {
              b.splice(e, 1)
              break
            }
          }
          b.length ? m.set('Hm_unsent_' + c.id, n.stringify(b)) : this.Ka()
        }
      },
      Ka: function () {
        m.remove('Hm_unsent_' + c.id)
      },
      Vb: function () {
        var a = this
        var b
        try {
          b = n.parse(m.get('Hm_unsent_' + c.id) || '[]')
        } catch (e) {
          b = []
        }
        if (b.length) {
          for (var g = function (b) {
              d.log(k.xa + '//' + b, function (b) {
                a.Wa(b)
              })
            }, f = 0; f < b.length; f++) g(b[f])
        }
      },
      Ma: function () {
        return Math.round(+new Date() / 1E3) % 65535
      }
    }
    return new a()
  })()
  var B = h.r; var C = h.load
  if (c.apps) {
    var D = [B.protocol, '//ers.baidu.com/app/s.js?']
    D.push(c.apps)
    C(D.join(''))
  }(function () {
    var a = mt.event
    var b = mt.lang
    var d = h.r
    if (c.kbtrk && typeof h.c !== 'undefined') {
      h.c.b.kb = b.wa(h.c.b.kb) ? h.c.b.kb : 0
      var e = function () {
        h.c.b.et = 85
        h.c.b.ep = h.c.b.kb
        h.c.i()
      }
      a.e(document, 'keyup', function () {
        h.c.b.kb++
      })
      a.e(window, 'unload', function () {
        e()
      })
      setInterval(e, d.Ob)
    }
  })()
  var E = h.r; var F = h.load; c.pt && F([E.protocol, '//ada.baidu.com/phone-tracker/insert_bdtj?sid=', c.pt].join(''))
  var H = h.r; var I = h.load; c.lxb && I([H.protocol, '//lxbjs.baidu.com/lxb.js?sid=', c.lxb].join(''))
  var J = h.load; var K = h.r.protocol
  if (c.qiao) {
    for (var L = [K + '//goutong.baidu.com/site/'], M = c.id, N = 5381, O = M.length, P = 0; P < O; P++) N = (33 * N + Number(M.charCodeAt(P))) % 4294967296
    N > 2147483648 && (N -= 2147483648)
    L.push(N % 1E3 + '/')
    L.push(c.id + '/b.js')
    L.push('?siteId=' + c.qiao)
    J(L.join(''))
  }(function () {
    var a = mt.h
    var b = mt.lang
    var d = mt.event
    var e = mt.o
    if (typeof h.c !== 'undefined' && (c.med || (!a.Qa || a.wb() > 7) && c.cvcc)) {
      var f; var l; var g; var m; var n = function (a) {
        if (a.item) {
          for (var b = a.length, d = Array(b); b--;) d[b] = a[b]
          return d
        }
        return [].slice.call(a)
      }
      var q = function (a, b) {
        for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x
      }
      var t = function (a, d) {
        var k = {}
        k.n = f
        k.t = 'clk'
        k.v = a
        if (d) {
          var l = d.getAttribute('href')
          var m = d.getAttribute('onclick') ? '' + d.getAttribute('onclick') : w
          var n = d.getAttribute('id') || ''
          g.test(l) ? (k.sn = 'mediate', k.snv = l) : b.d(m, 'String') && g.test(m) && (k.sn = 'wrap', k.snv = m)
          k.id = n
        }
        h.c.b.et = 86
        h.c.b.ep = e.stringify(k)
        h.c.i()
        for (k = +new Date(); +new Date() - k <= 400;);
      }
      if (c.med) {
        l = '/zoosnet', f = 'swt', g = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, m = {
          click: function () {
            for (var a = [], b = n(document.getElementsByTagName('a')), b = [].concat.apply(b, n(document.getElementsByTagName('area'))), b = [].concat.apply(b, n(document.getElementsByTagName('img'))), d, e, f = 0, k = b.length; f < k; f++) d = b[f], e = d.getAttribute('onclick'), d = d.getAttribute('href'), (g.test(e) || g.test(d)) && a.push(b[f])
            return a
          }
        }
      } else if (c.cvcc) {
        l = '/other-comm'
        f = 'other'
        g = c.cvcc.q || r
        var u = c.cvcc.id || r
        m = {
          click: function () {
            for (var a = [], b = n(document.getElementsByTagName('a')), b = [].concat.apply(b, n(document.getElementsByTagName('area'))), b = [].concat.apply(b, n(document.getElementsByTagName('img'))), d, e, f, k = 0, l = b.length; k < l; k++) d = b[k], g !== r ? (e = d.getAttribute('onclick'), f = d.getAttribute('href'), u ? (d = d.getAttribute('id'), (g.test(e) || g.test(f) || u.test(d)) && a.push(b[k])) : (g.test(e) || g.test(f)) && a.push(b[k])) : u !== r && (d = d.getAttribute('id'), u.test(d) && a.push(b[k]))
            return a
          }
        }
      }
      if (typeof m !== 'undefined' && typeof g !== 'undefined') {
        var s
        l += /\/$/.test(l) ? '' : '/'
        var k = function (a, d) {
          if (s === d) return t(l + a, d), x
          if (b.d(d, 'Array') || b.d(d, 'NodeList')) for (var e = 0, g = d.length; e < g; e++) if (s === d[e]) return t(l + a + '/' + (e + 1), d[e]), x
        }
        d.e(document, 'mousedown', function (a) {
          a = a || window.event
          s = a.target || a.srcElement
          var d = {}
          for (q(m, function (a, e) {
            d[a] = b.d(e, 'Function') ? e() : document.getElementById(e)
          }); s && s !== document && q(d, k) !== x;) s = s.parentNode
        })
      }
    }
  })();
  (function () {
    var a = mt.f
    var b = mt.lang
    var d = mt.event
    var e = mt.o
    if (typeof h.c !== 'undefined' && b.d(c.cvcf, 'Array') && c.cvcf.length > 0) {
      var f = {
        bb: function () {
          for (var b = c.cvcf.length, e, m = 0; m < b; m++)(e = a.pa(decodeURIComponent(c.cvcf[m]))) && d.e(e, 'click', f.oa())
        },
        oa: function () {
          return function () {
            h.c.b.et = 86
            var a = {
              n: 'form',
              t: 'clk'
            }
            a.id = this.id
            h.c.b.ep = e.stringify(a)
            h.c.i()
          }
        }
      }
      a.Ba(function () {
        f.bb()
      })
    }
  })();
  (function () {
    var a = mt.event
    var b = mt.o
    if (c.med && typeof h.c !== 'undefined') {
      var d = {
        n: 'anti',
        sb: 0,
        kb: 0,
        clk: 0
      }
      var e = function () {
        h.c.b.et = 86
        h.c.b.ep = b.stringify(d)
        h.c.i()
      }
      a.e(document, 'click', function () {
        d.clk++
      })
      a.e(document, 'keyup', function () {
        d.kb = 1
      })
      a.e(window, 'scroll', function () {
        d.sb++
      })
      a.e(window, 'load', function () {
        setTimeout(e, 5E3)
      })
    }
  })()
  c.spa !== r && String(c.spa) === '1' && (window._hmt = window._hmt || [], window._hmt.push(['_requirePlugin', 'UrlChangeTracker']))
})()
