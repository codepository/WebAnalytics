const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : './'
const ASSETS_DIR = process.env.NODE_ENV === 'production' ? './' : './'
module.exports = {
  publicPath: BASE_URL, // 必须在路径前加个点,不然打包成app会显示空白页面
  assetsDir: ASSETS_DIR,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/user': {
        target: 'http://129.0.97.23:31380'
        // target: 'http://localhost:8000'
        // target: 'http://129.0.97.23:31380',
      },
      '/workflow': {
        // target: 'http://localhost:8080'
        target: 'http://218.5.3.84:31380'
      },
      '/api/v1/yxkh': {
        target: 'http://localhost:8081'
      }
    }
  }
}
