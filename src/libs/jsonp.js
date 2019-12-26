import originJSONP from 'jsonp'
// 这时候Url是不带参数的，我们让data变成参数，data在具体定义获取具体内容的时候再单独配置
export default function jsonp (options) {
  // 看url是否有问号的意思就是只在第一次加参数的时候加一个问号，剩下就是加&
  options.url += (options.url.indexOf('?') < 0 ? '?' : '&') + param(options.data)
  return new Promise((resolve, reject) => {
    originJSONP(options.url, { params: '_callback' }, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
// 将data数据遍历，前提data是一个数组
function param (data) {
  const commonParams = {
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }
  data = Object.assign(data, commonParams)
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k} = ${encodeURIComponent(value)}`
    // url += '&' + k + '=' + value
  }
  return url ? url.substring(1) : ''
}
