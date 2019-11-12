import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
export default new Vuetify({
  theme: {
    themes: { theme }
  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
})
