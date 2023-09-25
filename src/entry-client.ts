import { createApp } from './main'

const { app, router, store } = createApp()

if (window._INITIAL_STATE__) {
  store.state.value = JSON.parse(JSON.stringify(window._INITIAL_STATE__))
}

router.isReady().then(() => {
  app.mount('#app')
})
