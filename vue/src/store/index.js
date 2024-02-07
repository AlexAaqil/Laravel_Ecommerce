import { createStore } from 'vuex'
import axios from '@/axios'
import router from '@/router'

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
        },
        async logout() {
            await axios.post('/logout')
            this.authUser = null;
            router.push({name: 'home'})
        }
    },
    getters: {
        user: (state) => state.authUser,
        isLoggedIn: (state) => !!state.authUser,
        isAdmin: (state) => state.authUser && state.authUser.user_level === 1
    }
})

export default store
