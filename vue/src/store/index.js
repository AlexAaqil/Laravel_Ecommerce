import { createStore } from 'vuex'
import axios from '@/axios'

const store = createStore({
    state: {
        authUser: null
    },
    mutations: {
        setUser(state, user) {
            state.authUser = user
        }
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser(context) {
            try {
                await context.dispatch('getToken')
                const response = await axios.get('/api/user')
                context.commit('setUser', response.data)
            } catch (error) {
                console.error('Error fetching user data:', error)
                throw error
            }
        }
    },
    getters: {
        user: (state) => state.authUser
    }
})

export default store
