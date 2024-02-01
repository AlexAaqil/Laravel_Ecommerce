<script setup>
import SideNav from '../../../../components/admin/SideNav.vue'
import { onMounted } from 'vue'
import useCategories from '../../../../composables/categories'

const { category, getCategory, updateCategory, errors } = useCategories()
const props = defineProps({
    id: {
        required: true,
        type: String,
    },
})

onMounted(() => getCategory(props.id))
</script>

<template>
    <main class="Admin">
        <SideNav />

        <section class="main_content">
            <div class="custom_form">
                <h1>Update Category</h1>

                <form action="" class="custom_form" @submit.prevent="updateCategory($route.params.id)">
                    <div class="input_group">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title" v-model="category.title" />
                        <span v-if="errors?.title" class="inline_alert">{{ errors.title[0] }}</span>
                    </div>

                    <button type="submit">Update</button>
                </form>
            </div>
        </section>
    </main>
</template>
