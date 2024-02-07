<template>
    <section class="Authentication">
        <div class="custom_form login">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <form @submit.prevent="signup">
                <div class="input_group">
                    <label for="first_name">First Name</label>
                    <input
                        type="text"
                        v-model="form.first_name"
                        name="first_name"
                        id="first_name"
                    />
                    <span v-if="errors.first_name" class="inline_alert">{{
                        errors.first_name[0]
                    }}</span>
                </div>

                <div class="input_group">
                    <label for="last_name">Last Name</label>
                    <input type="text" v-model="form.last_name" name="last_name" id="last_name" />
                    <span v-if="errors.last_name" class="inline_alert">{{
                        errors.last_name[0]
                    }}</span>
                </div>

                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="form.email" name="email" id="email" />
                    <span v-if="errors.email" class="inline_alert">{{ errors.email[0] }}</span>
                </div>

                <div class="input_group">
                    <label for="password">Password</label>
                    <input type="password" v-model="form.password" name="password" id="password" />
                    <span v-if="errors.password" class="inline_alert">{{
                        errors.password[0]
                    }}</span>
                </div>

                <div class="input_group">
                    <label for="password_confirmation">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                    />
                    <span v-if="errors.password_confirmation" class="inline_alert">{{
                        errors.password_confirmation[0]
                    }}</span>
                </div>

                <button type="submit">Signup</button>
            </form>

            <p>Already have an accont? <router-link :to="{ name: 'login' }">Login</router-link></p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/axios'
import router from '@/router'

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const errors = ref({})

const signup = async () => {
    try {
        await axios.post('/register', form.value)
        router.push({name: 'home'})
    } catch (error) {
        errors.value = error.response.data
            ? error.response.data.errors
            : { general: ['An error occurred during signup.'] }
    }
}
</script>
