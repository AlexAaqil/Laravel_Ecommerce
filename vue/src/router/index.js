import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { public: true }
    },
    {
        path: '/login',
        name: 'login',
        meta: { public: true },
        component: () => import('@/views/auth/LogIn.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        meta: { public: true },
        component: () => import('@/views/auth/SignUp.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: { public: true },
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        meta: { public: true },
        component: () => import('@/views/ShopView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        meta: { public: true },
        component: () => import('@/views/ContactView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        meta: { requiresAuth: true },
        component: () => import('@/views/admin/AdminDashboard.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'admin_dashboard',
                component: () => import('@/views/admin/AdminDashboard.vue')
            },
            {
                path: 'categories',
                name: 'admin_categories',
                component: () => import('@/views/admin/products/categories/CategoriesIndex.vue')
            },
            {
                path: 'categories/store',
                name: 'new_category',
                component: () => import('@/views/admin/products/categories/AddCategory.vue')
            },
            {
                path: 'categories/:id/update',
                name: 'update_category',
                props: true,
                component: () => import('@/views/admin/products/categories/UpdateCategory.vue')
            },
            {
                path: 'products',
                name: 'admin_products',
                component: () => import('@/views/admin/products/products/ProductsIndex.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        meta: { public: true },
        component: () => import('@/views/404Page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.token) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
