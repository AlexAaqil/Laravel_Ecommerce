<script setup>
import SideNav from '../../../../components/admin/SideNav.vue'
import ProductsNav from '../../../../components/admin/ProductsNavbar.vue'

import useCategories from '../../../../composables/categories'
import { onMounted } from 'vue'

const { categories, getCategories } = useCategories()

onMounted(() => getCategories())
</script>

<template>
    <main class="Admin">
        <SideNav />

        <section class="main_content">
            <ProductsNav />

            <div class="header">
                <h1>Categories</h1>
                <router-link :to="{ name: 'home' }">New</router-link>
            </div>

            <div class="body">
                <ul>
                    <li v-for="category in categories" :key="category.id" class="categories">
                        <span>{{ category.title }}</span>
                        <span class="actions">
                            <span><i class="fas fa-pencil-alt edit"></i></span>
                            <span><i class="fas fa-trash-alt delete"></i></span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
