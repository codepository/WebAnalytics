import HttpRequest from '@/libs/axios'
const MAINHOST = 'http://218.5.3.84:31380'
// const MAINHOST = 'http://fzrb.fznews.com.cn'
const BASE_URL = process.env.NODE_ENV === 'production' ? MAINHOST : './'
const axios = new HttpRequest(BASE_URL)
// const axios = new HttpRequest('')
export default axios
