# 百度分析工具 hm.js

##  mt.cookie

mt.cookie.set 设置cookie

mt.cookie.get 获取cookie

mt.cookie.Nb 

## mt.lang 判断变量类型

mt.lang.d = function (a, b) // 判断变量a的类型是否为b,如 a=123,b='Number' 则返回true

mt.lang.wa = function (a) // 判断 a 是否为有限数字

mt.lang.K = function (a) // 判断 a 是否为字符串

mt.lang.isArray = function (a) // 判断a是否为数组

mt.lang.g = function (a) // 将 '、*、! 替换成 '0、'1、'2

mt.lang.trim = function (a) //  去掉a开头和结尾的空格   ;\s: 空格; ^\s+: 以空格开始; \s+$:以空格结束

mt.lang.J = function (a, b)  // 数组a是否包含b

## mt.url 由字符串匹配url地址

mt.url.m = function (a, b)  // 获取地址a中参数b的值

mt.url.mc = function (a)  // 获取地址 a 的协议，结果为https: 或 http:

mt.url.vb = function (a)  // 获取地址a的域名

mt.url.Q = function (a) // 获取地址a的域名

mt.url.sa = function (a)  // 获取地址 a 域名和参数之间的值，如:https://www.baidu.com/a?b=x,结果为/a
    
## mt.f

mt.f.pa = function (d) // 根据id获取页面元素

mt.f.La = function (d) // 暂时无法确定

mt.f.Ba = function () // 暂时无法确定

## mt.event 事件

mt.event.e = function (a, b, d) // 为页面元素a添加事件类型b，处理方法为d

## mt.h 客户端属性

mt.h.Qa 判断是否是IE浏览器，值为boolean

mt.h.wb = function () // 匹配IE浏览器版本

mt.h.Sb 屏幕尺寸

mt.h.Z = function () // 返回当前页面相对于窗口显示区顶部的距离。

mt.h.R = function ()  // 返回clientHeight

mt.h.orientation // 横竖屏