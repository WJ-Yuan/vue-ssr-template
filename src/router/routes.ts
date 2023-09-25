import type { RouteRecordRaw } from 'vue-router'
const Home = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
