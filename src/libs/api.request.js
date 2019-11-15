import HttpRequest from '@/libs/axios'
import config from '../../vue.config'
const axios = new HttpRequest(config.publicPath)
export default axios
