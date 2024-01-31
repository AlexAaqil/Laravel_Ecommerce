import { ref } from "vue"
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api/"

export default function useCategories() {
    const category = ref([]);
    const categories = ref([]);

    const getCategories = async() => {
        const response = await axios.get("categories");
        categories.value = response.data;
    };

    return {
        category,
        categories,
        getCategories,
    };
}