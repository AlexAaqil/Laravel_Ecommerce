// store.js
import { createStore } from 'vuex'
import axios from '@/axios'

const store = createStore({
    state: {
        token: sessionStorage.getItem('TOKEN'),
        data: {}
    },
    mutations: {
        setUser(state, user) {
            state.data = user
        },
        setToken(state, token) {
            state.token = token
            if (token) {
                sessionStorage.setItem('TOKEN', token)
            } else {
                sessionStorage.removeItem('TOKEN')
            }
        }
    },
    actions: {
        login({ commit }, data) {
            // Make a POST request to your Laravel API's login endpoint
            return axios.post('/login', data).then(({ data }) => {
                commit('setUser', data.user)
                commit('setToken', data.token)
                return data
            })
        },
        logout({ commit, state }) {
            const config = {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            }

            return axios.post('/logout', null, config).then((response) => {
                commit('setToken', null)
                return response
            })
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
        }
    }
})

export default store
