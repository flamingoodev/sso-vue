import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import ElementUI from 'element-ui'
import Locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import Vuex from 'vuex'
import Api from '@/api'

Vue.use(ElementUI, { Locale })
Vue.use(Vuex)
Vue.prototype.$api = Api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
