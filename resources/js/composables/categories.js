import { ref } from "vue";
import axios from 'axios';
// import {useRouter} from 'vue-router'

export default function useCategories() {
    const category = ref([])
    const categories = ref([])

    const errors = ref('')
    // const router = useRouter()

    const getCategories = async () => {
        let response = await axios.get('/api/categories')
        categories.value = response.data.data
        console.log(categories.value)
    }

    return {
        errors,
        category,
        categories,
        getCategories,
    }
}
