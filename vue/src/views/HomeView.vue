<template>
    <Navbar />

    <main class="HomePage">
        <section class="Hero">
            <div class="container">
                <div class="text">
                    <h1>ECommerce Shop</h1>
                    <p>One step online shop</p>
                    <p v-if="user">Hi {{ user.first_name }} {{ user.last_name }}!</p>
                </div>
                <div class="image">
                    <img src="../assets/images/hero.jpg" alt="Hero Image" />
                </div>
            </div>
        </section>

        <section class="Products">
            <div class="container">
                <h1>Most Popular</h1>
                <div class="products_wrapper">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    </main>

    <Footer />
</template>

<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Product from '../components/ProductPartial.vue'
import Footer from '../components/FooterComponent.vue'

import { ref, onMounted } from 'vue'
import store from '@/store/'

const user = ref({})

onMounted(async () => {
  await store.dispatch('getUser')
  const userData = store.getters.user
  if (userData) {
    user.value = userData
  }
})
</script>
