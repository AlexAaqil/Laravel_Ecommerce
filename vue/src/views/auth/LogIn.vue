<!-- LoginView.vue -->
<template>
    <section class="Authentication">
        <div class="custom_form login">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <form @submit.prevent="login">
                <div v-if="errorMessage" class="alert_error">{{ errorMessage }}</div>

                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="user.email" name="email" id="email" />
                </div>

                <div class="input_group">
                    <label for="password">Password</label>
                    <input type="password" v-model="user.password" name="password" id="password" />
                </div>

                <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <router-link :to="{ name: 'signup' }">Signup</router-link></p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store'
import router from '@/router'

const errorMessage = ref('')
const user = {
    email: '',
    password: ''
}

function login() {
    store
        .dispatch('login', user)
        .then(() => {
            router.push({ name: 'shop' })
        })
        .catch((error) => {
            console.log(error)
            errorMessage.value = error.response.data.message
        })
}
</script>
