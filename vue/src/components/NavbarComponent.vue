<template>
    <nav class="navbar">
        <router-link :to="{ name: 'home' }" class="branding">
            <h1>Aaqil</h1>
        </router-link>

        <div class="nav_links">
            <router-link :to="{ name: 'shop' }">Shop</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
            <span class="nav_authentication">
                <router-link :to="{ name: 'login' }" v-if="!isLoggedIn">Login</router-link>
                <a href="#" @click="logout" v-if="isLoggedIn" class="logout">Logout</a>
            </span>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['isLoggedIn'])
    },

    methods: {
        ...mapActions(['logout'])
    }
}
</script>
