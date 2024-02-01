<template>
    <section class="Authentication">
        <div class="custom_form login">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <form @submit.prevent="signup">
                <div class="input_group">
                    <label for="first_name">First Name</label>
                    <input type="text" v-model="first_name" name="first_name" id="first_name" />
                    <span v-if="errors.first_name" class="inline_alert">{{ errors.first_name[0] }}</span>
                </div>

                <div class="input_group">
                    <label for="last_name">Last Name</label>
                    <input type="text" v-model="last_name" name="last_name" id="last_name" />
                    <span v-if="errors.last_name" class="inline_alert">{{ errors.last_name[0] }}</span>
                </div>

                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" name="email" id="email" />
                    <span v-if="errors.email" class="inline_alert">{{ errors.email[0] }}</span>
                </div>

                <div class="input_group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" id="password" />
                    <span v-if="errors.password" class="inline_alert">{{ errors.password[0] }}</span>
                </div>

                <!-- <div class="input_group">
                    <label for="password">Confirm Password</label>
                    <input type="password" name="password" id="password" />
                </div> -->

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

const first_name = ref('')
const last_name = ref('')
const email = ref('')
const password = ref('')
const alertMessage = ref(null)
const errors = ref({})

const signup = async () => {
    try {
        const response = await axios.post('/register', {
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value
        })

        // Check if the response status is successful (2xx)
        if (response.status >= 200 && response.status < 300) {
            // Handle the response from the server
            // console.log('Signup successful:', response.data)
            alertMessage.value = 'Signup Successful. You can now login.'

            // Redirect to home page on successful login
            router.push({ name: 'login' })
        } else {
            console.error('Invalid response status:', response.status)
        }
    } catch (error) {
        // Show an error message or handle login failure
        // console.error('Signup failed:', error.response ? error.response.data : error.message)
        errors.value = error.response ? error.response.data.errors : { general : ['An error occured during signup.'] }
    }
}
</script>
