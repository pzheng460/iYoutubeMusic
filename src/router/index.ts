// 创建一个路由器，并暴露出去
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import LibraryView from '@/views/LibraryView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/library',
    name: 'Library',
    component: LibraryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
