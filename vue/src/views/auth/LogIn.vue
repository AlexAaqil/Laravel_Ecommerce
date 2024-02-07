<template>
    <section class="Authentication">
        <div class="custom_form login">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <form @submit.prevent="login">
                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="form.email" name="email" id="email" />
                    <span v-if="errors.email" class="inline_alert">{{
                        errors.email[0]
                    }}</span>
                </div>

                <div class="input_group">
                    <label for="password">Password</label>
                    <input type="password" v-model="form.password" name="password" id="password" />
                    <span v-if="errors.password" class="inline_alert">{{
                        errors.password[0]
                    }}</span>
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
import router from '@/router'

const errors = ref('')

const form = ref({
    email: '',
    password: ''
})

const login = async () => {
    try {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', form.value)
        router.push({ name: 'home' })
    } catch (error) {
        errors.value = error.response.data.errors
    }
}

</script>
