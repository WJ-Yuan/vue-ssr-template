import { Lang } from '@/constants'

export const useCommonStore = defineStore('common', () => {
  const lang = ref<Lang>(Lang.EN)

  const changeLang = (language: Lang) => {
    lang.value = language
  }

  return {
    lang,
    changeLang
  }
})
