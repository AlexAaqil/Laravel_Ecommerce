<script setup>
import SideNav from '../../../../components/admin/SideNav.vue'
import ProductsNav from '../../../../components/admin/ProductsNavbar.vue'

import useCategories from '../../../../composables/categories'
import { onMounted } from 'vue'

const { categories, getCategories, destroyCategory } = useCategories()

onMounted(() => getCategories())
</script>

<template>
    <main class="Admin">
        <SideNav />

        <section class="main_content">
            <ProductsNav />

            <div class="header">
                <h1>Categories</h1>
                <router-link :to="{ name: 'new_category' }">New</router-link>
            </div>

            <div class="body">
                <ul>
                    <li v-for="category in categories" :key="category.id" class="categories">
                        <span>{{ category.title }}</span>
                        <span>{{ category.slug }}</span>
                        <span class="actions">
                            <span>
                                <router-link :to="{ name: 'update_category', params: {id: category.id} }">
                                    <i class="fas fa-pencil-alt edit"></i>
                                </router-link>
                            </span>
                            <span>
                                <button @click="destroyCategory(category.id)">
                                    <i class="fas fa-trash-alt delete"></i>
                                </button>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
