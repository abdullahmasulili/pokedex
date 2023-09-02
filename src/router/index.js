// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    redirect: to => {
      return 'library'
    },
    children: [
      {
        path: 'library',
        name: 'Library',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Library.vue'),
      },
      {
        path: 'favourite',
        name: 'Favourite',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Favourite.vue'),
      },
      {
        path: 'about',
        name: 'About Me',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
