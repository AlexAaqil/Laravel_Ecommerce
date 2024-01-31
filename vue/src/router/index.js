import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/ShopView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/admin/dashboard',
            name: 'admin_dashboard',
            component: () => import('../views/admin/AdminDashboard.vue')
        },
        {
            path: '/admin/categories',
            name: 'admin_categories',
            component: () => import('../views/admin/products/categories/CategoriesIndex.vue')
        },
        {
            path: '/admin/categories/store',
            name: 'new_category',
            component: () => import('../views/admin/products/categories/AddCategory.vue')
        },
        {
            path: '/admin/categories/:id/update',
            name: 'update_category',
            component: () => import('../views/admin/products/categories/UpdateCategory.vue'),
            props: true
        },
        {
            path: '/admin/products',
            name: 'admin_products',
            component: () => import('../views/admin/products/products/ProductsIndex.vue')
        }
    ]
})

export default router
