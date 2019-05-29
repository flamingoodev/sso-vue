import Vue from 'vue'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import Constant from '@/constant/constant'
// Element-ui Locale
import ElementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementEnLocale from 'element-ui/lib/locale/lang/en'
// Customer Locale
import CustomerZhCNLocale from '@/locale/zh-CN'
import CustomerEnLocale from '@/locale/en'

Vue.use(VueI18n)

const messages = {
  'zh-CN': {
    ElementZhCNLocale,
    CustomerZhCNLocale
  },
  'en': {
    ElementEnLocale,
    CustomerEnLocale
  }
}

export function getLanguage () {
  const language = VueCookie.get(Constant.cookieLang)
  if (language) {
    return language
  } else {
    return 'zh-CN'
  }
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n
