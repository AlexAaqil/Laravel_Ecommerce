<script setup>
</script>

<template>
    <nav>
        <router-link :to="{ name: 'home' }" class="branding">
            <h1>Aaqil</h1>
        </router-link>

        <div class="nav_links">
            <router-link :to="{ name: 'shop' }">Shop</router-link>
            <router-link :to="{ name: 'about'}">About</router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </div>
    </nav>


</template>
