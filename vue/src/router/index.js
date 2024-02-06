import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { public: true },
        component: HomeView
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
        path: '/login',
        name: 'login',
        meta: { public: true },
        component: () => import('../views/auth/LogIn.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        meta: { public: true },
        component: () => import('../views/auth/SignUp.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: { public: true },
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        meta: { public: true },
        component: () => import('../views/ShopView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        meta: { public: true },
        component: () => import('../views/ContactView.vue')
    },
    {
        path: '/admin/dashboard',
        name: 'admin_dashboard',
        meta: {
            requiresAuth: true
        },
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
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
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
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({ name: 'app.dashboard' })
    } else {
        next()
    }
})

export default router
