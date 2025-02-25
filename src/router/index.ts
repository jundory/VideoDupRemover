import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
import VideoList from '@/views/VideoList.vue'
import ShortList from '@/views/ShortList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BaseLayout,
      children: [
        { path: '', component: VideoList },
        { path: '/short', component: ShortList },
      ],
    },
  ],
})

export default router
