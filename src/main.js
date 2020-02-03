import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 將它轉為 Vue 的套件
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
// 前端 axios 請求附帶 Cookies 設定
axios.defaults.withCredentials = true

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW
  }
})

Vue.component('Loading', Loading)
// Vue.filter(自定 filter 名稱, import 的 filter 名稱)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 若是前往的頁面需要驗證，則需 call api check
    const api = `${process.env.VUE_APP_API}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
