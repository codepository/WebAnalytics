# 百度分析工具 hm.js

## mt 对象

###  mt.cookie

mt.cookie.set 设置cookie

mt.cookie.get 获取cookie

mt.cookie.Nb 

### mt.lang 判断变量类型

mt.lang.d = function (a, b) // 判断变量a的类型是否为b,如 a=123,b='Number' 则返回true

mt.lang.wa = function (a) // 判断 a 是否为有限数字

mt.lang.K = function (a) // 判断 a 是否为字符串

mt.lang.isArray = function (a) // 判断a是否为数组

mt.lang.g = function (a) // 将 '、*、! 替换成 '0、'1、'2

mt.lang.trim = function (a) //  去掉a开头和结尾的空格   ;\s: 空格; ^\s+: 以空格开始; \s+$:以空格结束

mt.lang.J = function (a, b)  // 数组a是否包含b

### mt.url 由字符串匹配url地址

mt.url.m = function (a, b)  // 获取地址a中参数b的值

mt.url.mc = function (a)  // 获取地址 a 的协议，结果为https: 或 http:

mt.url.vb = function (a)  // 获取地址a的域名

mt.url.Q = function (a) // 获取地址a的域名

mt.url.sa = function (a)  // 获取地址 a 域名和参数之间的值，如:https://www.baidu.com/a?b=x,结果为/a
    
### mt.f

mt.f.pa = function (d) // 根据id获取页面元素

mt.f.La = function (d) // 暂时无法确定

mt.f.Ba = function () // 暂时无法确定

### mt.event 事件

mt.event.e = function (a, b, d) // 为页面元素a添加事件类型b，处理方法为d

### mt.h 客户端属性

mt.h.Qa 判断是否是IE浏览器，值为boolean

mt.h.wb = function () // 匹配IE浏览器版本

mt.h.Sb 屏幕尺寸

mt.h.Z = function () // 返回当前页面相对于窗口显示区顶部的距离。

mt.h.R = function ()  // 返回clientHeight

mt.h.orientation // 横竖屏

### mt.o

mt.o.stringify 将对象转换成字符串

### mt.localStorage 本地存储

mt.localStorage.ga = function () // 在<head>标签末尾添加一个隐藏的input输入框

mt.localStorage.set = function (a, b, d) // 本地存储添加新的项目a为key, getTime() + '|' + b 为值

mt.localStorage.get = function (a)  // 获取存储在本地存储中key为a的值

mt.localStorage.remove = function (a) // 移除key为a的项目

### mt.sessionStorage session存储

mt.sessionStorage.set = function (a, b) // 添加key为a,值为b的项

mt.sessionStorage.get = function (a) // 获取项目a

mt.sessionStorage.remove = function (a) // 移除项目a

### mt.Ya 图片日志

mt.Ya.log = function (a, b)  // 添加图片日志,a为图片src,b为可执行函数

### mt.Ca

mt.Ca.Cb = function ()  // 若存在swf插件则返回它的版本

mt.Ca.jc = function (a, b, d, e, f)  // 添加一个swf对象


## h 对象

h.qb // 是否包含hm插件,值为bool

### h.z

h.z.D = {}

h.z.e = function (a, d) // 向D添加key为a,值为d的项


### h.load 动态加载js

h.load.a = function (a, e) // 添加地址为a的js文件,加载完毕之后执行函数e

### h.rb referer

h.rb = function () // 当h.c.b.nv不为空的时候存储上一个页面的URL，否则获取上一个页面的URL

### h.ma 存储

h.ma.e.getData = function (e)  // 从cookie || sessionStorage || localStorage 里获取项目e的值

h.ma.e.T = function (a, e)  // a与e域名是否相同

h.ma.e.P = function ()  // 返回当前域名

h.ma.e.ba = function (a, e) // 地址a去掉协议头之后，判断是否能在开始位置匹配到e

h.ma.e.X = function () { // 判断要跳转的页面，是否属于需要统计域名的下级目录,是的话返回: 域名+'/'

h.ma.e.setData = function (f, l, g) // 将值存入 cookie || sessionStorage || localStorage, f为key，l为值

h.ma.e.Rb = function (f) // 从存储中移除key为f的项

### h.N

```
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
```
h.N.init = function () // 获取user信息

h.N.Lb = function ()  // 获取user信息

h.N.A = function (a) // 以对象形式返回a信息

h.N.ta = function () // 以对象形式返回session和user信息

h.N.za = function ()  // 缓存用户信息,key 为 'Hm_up_' + c.id

h.N.Na = function (a) // 获取对象f中key为a的项

h.N.M = function (a) // 对象a中所有项先根据scope值自行拼接成特定字符串，然后用'!'将这些字符串拼接起来

h.N.s = function (b)  // b为'userId'则删除对象e中user.uid且缓存用户信息，若b为'user'则如果e.user.uid_不为空,e.user={'uid':e.user.uid_}且缓存用户信息

h.N.Mb = function (a, b, d) // 设置对象e中key为a的项属性为b的值为d

h.N.setProperty = function (d, f, g) // 将对象f的项赋给对象e中key为d的项


### h.oa


### m 第801行

m.fa = 'HM_ce'

m.ab = function () // 为document添加点击事件处理方法为h.oa.W,为c.cetrk指向的元素添加点击事件,处理函数为h.oa.Qb

m.Ja = function (a)  // 遍历c.cetrk 并执行m.w方法

m.w = function (b) // 遍历b.a

### t 第865行

未知

### m 第953行

未知


### 第999行

加载hl.js 或t.js

### h.na 第1016行

function b ()  // 每隔100ms更新一次u或s值

function d (a) // 若a是document属性返回a，若不是分别加上'webkit', 'ms', 'moz', 'o'前缀再判断一次

function e (a) // 判断参数a的类型以更新q值

### h.lb

h.lb.Jb = function (e) // 加载x.js

h.lb.Zb = function (b) // 将b存储到对象window._dxt数组

### h.gb