import type { App } from 'vue'
import { Lang, isServer } from '@/constants'

export const changeLang = (app: App, lang: Lang) => {
  app.config.globalProperties.$i18n.locale = lang

  if (!isServer) {
    document.documentElement.setAttribute('lang', lang)
  }
}
