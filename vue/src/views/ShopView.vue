<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Product from '../components/ProductPartial.vue'
</script>

<template>
    <Navbar />

    <section class="ShopPage">
        <div class="container">
            <div class="search">
                <form action="#" method="get">
                    <input type="text" name="search" id="search" placeholder="Search Products" />
                    <button type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div class="products_wrapper">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    </section>
</template>