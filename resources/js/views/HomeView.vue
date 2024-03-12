<template>
    <h1>From Vue</h1>

    <ul>
        <li v-for="category in categories" :key="category.id">
            {{ category.title }}
            {{ category.slug }}
        </li>
    </ul>
</template>

<script setup>
import useCategories from "@/composables/categories";
import { onMounted } from "vue";

const { categories, getCategories } = useCategories();

onMounted(getCategories);
</script>
