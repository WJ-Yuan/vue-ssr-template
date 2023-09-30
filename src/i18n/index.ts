import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'

export default function () {
  return createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      zh,
      en
    }
  })
}
