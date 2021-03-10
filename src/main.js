import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import Vuex from 'vuex'
import Api from '@/api'
import Constant from '@/constant/constant'
import i18n from '@/locale'
import '@/utils/permission'

Vue.use(ElementUI, {
  size: Constant.elementSize,
  i18n: (key, value) => i18n.t(key, value) })
Vue.use(Vuex)
Vue.prototype.$api = Api
Vue.prototype.$const = Constant
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
