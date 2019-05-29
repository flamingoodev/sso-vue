import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import Vuex from 'vuex'
import Api from '@/api'
import Constant from '@/constant/constant'
import CustomLocale from '@/locale'

Vue.use(ElementUI, {
  size: Constant.elementSize,
  i18n: (key, value) => CustomLocale.t(key, value) })
Vue.use(Vuex)
Vue.prototype.$api = Api
Vue.prototype.$const = Constant
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
