<script setup>
import SideNav from '../../../../components/admin/SideNav.vue'
import { reactive } from 'vue'
import useCategories from '../../../../composables/categories'

const { storeCategory, errors } = useCategories()

const form = reactive({
    title: ''
})
</script>

<template>
    <main class="Admin">
        <SideNav />

        <section class="main_content">
            <div class="custom_form">
                <h1>New Category</h1>

                <form action="" class="custom_form" @submit.prevent="storeCategory(form)">
                    <div class="input_group">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title" v-model="form.title" />
                        <span v-if="errors && errors.title" class="inline_alert">{{ errors.title }}</span>
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </section>
    </main>
</template>
