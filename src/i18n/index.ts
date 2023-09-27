import { createI18n } from 'vue-i18n'
import en from './en-us.json'
import zh from './zh-cn.json'

export default function () {
  return createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'zh-cn',
    fallbackLocale: 'zh-cn',
    messages: {
      'zh-cn': zh,
      'en-us': en
    }
  })
}
