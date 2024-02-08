<template>
    <section class="Authentication">
        <div class="custom_form login passwords">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <p>Enter the email we should use to send you the reset link.</p>

            <form @submit.prevent="forgot_password">
                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="form.email" name="email" id="email" />
                    <span v-if="errors.email" class="inline_alert">{{ errors.email[0] }}</span>
                </div>

                <button type="submit">Send Email</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/axios'

const form = ref({
    email: ''
})

const errors = ref({})

const forgot_password = async () => {
    try {
        await axios.post('/forgot-password', form.value)
    } catch (error) {
        // Reset errors object
        errors.value = {}

        // Set error messages individually
        if (error.response && error.response.data && error.response.data.errors) {
            Object.assign(errors.value, error.response.data.errors)
        } else {
            // Handle generic error
            errors.value.generic = ['An error occurred. Please try again.']
        }
    }
}
</script>
