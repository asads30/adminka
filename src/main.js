import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'

import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import * as filters from './filters'

import '@/icons'
import '@/permission'

Vue.use(ElementUI, { locale })

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
