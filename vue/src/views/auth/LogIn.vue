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
                    <input type="email" v-model="email" name="email" id="email" />
                </div>

                <div class="input_group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" id="password" />
                </div>

                <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <router-link :to="{ name: 'signup' }">Signup</router-link></p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/axios'
import store from '@/store'
import router from '@/router'

const email = ref('')
const password = ref('')
const errorMessage = ref(null)

const login = async () => {
    try {
        const response = await axios.post('/login', {
            email: email.value,
            password: password.value
        })

        // Check if the response status is successful (2xx)
        if (response.status >= 200 && response.status < 300) {
            // Redirect to home page on successful login
            store.dispatch('login')
            router.push({ name: 'home' })
        } else {
            console.error('Invalid response status:', response.status)
            errorMessage.value = 'Invalid response status'
        }
    } catch (error) {
        // Show an error message or handle login failure
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message
        } else if (error.message) {
            // If there is a general error message
            errorMessage.value = error.message
        } else {
            // Fallback message for other cases
            errorMessage.value = 'An error occurred during login'
        }
    }
}
</script>
