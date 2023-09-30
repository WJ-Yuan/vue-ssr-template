import { createApp } from './main'
import { useCommonStore } from '@/store/common'
import { changeLang } from '@/utils'

const { app, router, store } = createApp()

if (window._INITIAL_STATE__) {
  store.state.value = JSON.parse(JSON.stringify(window._INITIAL_STATE__))
}

router.isReady().then(() => {
  const lang = useCommonStore(store).lang
  changeLang(app, lang)
  app.mount('#app')
})
