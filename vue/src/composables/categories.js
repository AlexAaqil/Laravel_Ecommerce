import { ref } from 'vue'
import axios from '@/axios'
import { useRouter } from 'vue-router'

export default function useCategories() {
    const category = ref([])
    const categories = ref([])
    const errors = ref({})
    const router = useRouter()

    const getCategories = async () => {
        try {
            const response = await axios.get('/categories')
            categories.value = response.data
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    const getCategory = async (id) => {
        const response = await axios.get('/categories/' + id)
        category.value = response.data
    }

    const storeCategory = async (data) => {
        try {
            await axios.post('/categories', data)
            await router.push({ name: 'admin_categories' })
        } catch (error) {
            if (error.response.status === 422) {
                // console.log(error.response.data.errors)
                errors.value = error.response.data.errors

            }
        }
    }

    const updateCategory = async (id) => {
        try {
            await axios.put('/categories/' + id, category.value)
            await router.push({ name: 'admin_categories' })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const destroyCategory = async (id) => {
        if(!window.confirm("Are you sure you want to delete this category?")) {
            return;
        }
        await axios.delete('/categories/' + id)
        await getCategories();
    }

    return {
        category,
        categories,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory
    }
}
