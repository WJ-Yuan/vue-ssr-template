import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const baseUrl = process.env.baseUrl || 'baseUrl'

console.log(baseUrl)

export default function () {
  const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)
  return createRouter({
    history,
    routes
  })
}
