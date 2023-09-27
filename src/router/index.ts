import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { isServer, BASE_URL } from '@/constants'

export default function () {
  const history = isServer ? createMemoryHistory(BASE_URL) : createWebHistory(BASE_URL)
  return createRouter({
    history,
    routes
  })
}
