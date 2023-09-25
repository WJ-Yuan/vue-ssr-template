import { createSSRApp } from 'vue'
import createRouter from '@/router/index'
import { createPinia } from 'pinia'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  const store = createPinia()

  app.use(router).use(store)

  return {
    app,
    router,
    store
  }
}
