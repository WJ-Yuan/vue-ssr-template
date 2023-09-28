import { createSSRApp, createApp as _createApp } from 'vue'
import { createPinia } from 'pinia'
import createRouter from '@/router/index'
import createI18n from '@/i18n/index'
import App from './App.vue'
import 'uno.css'
import 'element-plus/dist/index.css'
import { isServer } from './constants'

export function createApp() {
  const app = isServer ? createSSRApp(App) : _createApp(App)
  const router = createRouter()
  const store = createPinia()
  const i18n = createI18n()

  app.use(router).use(store).use(i18n)

  return {
    app,
    router,
    store,
    i18n
  }
}
