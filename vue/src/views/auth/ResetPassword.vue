<template>
    <section class="Authentication">
        <div class="custom_form login passwords">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <p>Enter a new password. Also, ensure you use a strong password.</p>

            <form>
                <div class="input_group">
                    <label for="password">New Password</label>
                    <input type="password" v-model="form.password" name="password" id="password" />
                    <!-- <span v-if="errors.password" class="inline_alert">{{
                        errors.password[0]
                    }}</span> -->
                </div>

                <div class="input_group">
                    <label for="password_confirmation">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                    />
                    <!-- <span v-if="errors.password_confirmation" class="inline_alert">{{
                        errors.password_confirmation[0]
                    }}</span> -->
                </div>

                <button type="submit">Reset</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'

const form = ref({
    password: '',
    password_confirmation: ''
})
</script>
