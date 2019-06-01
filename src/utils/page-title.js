import config from '@/config'
import i18n from '@/locale'

const title = config.title

export default function getPageTitle (key) {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    const appName = i18n.t(`common.appName`)
    return `${pageName} - ${appName}`
  }
  return `${title}`
}
