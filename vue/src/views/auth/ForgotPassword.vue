<template>
    <section class="Authentication">
        <div class="custom_form login passwords">
            <h1>
                <router-link :to="{ name: 'home' }">Aaqil</router-link>
            </h1>

            <p>Enter the email we should use to send you the reset link.</p>

            <form>
                <div class="input_group">
                    <label for="email">Email</label>
                    <input type="email" v-model="form.email" name="email" id="email" />
                    <!-- <span v-if="errors.email" class="inline_alert">{{
                        errors.email[0]
                    }}</span> -->
                </div>

                <button type="submit">Send Email</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'

const form = ref({
    email: ''
})
</script>
