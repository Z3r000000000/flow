import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === "production" ? "/flower/" : "/",),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/teh',
      name: 'teh',
      component: () => import('../views/TehnikaView.vue')
    },
    {
      path: '/zp',
      name: 'zp',
      component: () => import('../views/ZPView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/admin-login',
      name: 'adminLogin',
      component: () => import('../views/admin/adminLoginView.vue')
    },
    {
      path: '/admin-shop',
      name: 'admin-shop',
      component: () => import('../views/admin/adminShopView.vue')
    },
    {
      path: '/admin-order',
      name: 'admin-order',
      component: () => import('../views/admin/adminOrderView.vue')
    }

    
  ]
})

export default router
