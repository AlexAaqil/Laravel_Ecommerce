<template>
    <nav class="sidenav">
        <i class="fas fa-chevron-circle-right toggle"></i>

        <div class="header">
            <router-link :to="{ name: 'home' }">
                <img src="../../assets/images/logo.png" alt="Sidenav Image" />
            </router-link>
            <h1 class="nav_text">Aaqil</h1>
        </div>

        <div class="body">
            <ul class="nav_links">
                <li class="nav_link">
                    <router-link :to="{ name: 'admin_dashboard' }">
                        <i class="fas fa-home icon"></i>
                        <span class="nav_text">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav_link">
                    <a href="">
                        <i class="fas fa-users-cog icon"></i>
                        <span class="nav_text">Admins</span>
                    </a>
                </li>
                <li class="nav_link">
                    <a href="">
                        <i class="fas fa-users icon"></i>
                        <span class="nav_text">Users</span>
                    </a>
                </li>
                <li class="nav_link">
                    <router-link :to="{ name: 'admin_products' }">
                        <i class="fas fa-barcode icon"></i>
                        <span class="nav_text">Products</span>
                    </router-link>
                </li>
                <li class="nav_link">
                    <a href="">
                        <i class="fas fa-truck-loading icon"></i>
                        <span class="nav_text">Orders</span>
                    </a>
                </li>
                <li class="nav_link">
                    <a href="">
                        <i class="fas fa-comment icon"></i>
                        <span class="nav_text">Comments</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="footer">
            <ul>
                <li>
                    <a href="#">
                        <img src="../../assets/images/default_profile.jpg" alt="Profile Picture" />
                    </a>
                </li>
                <li>
                    <button @click="logout">
                        <i class="fas fa-sign-out-alt icons"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import router from '@/router'
import store from '@/store'
import { ref, onMounted } from 'vue'

const sidebar = ref(null)
const mainContent = ref(null)
const toggle = ref(null)

const sidebarWidth = '15%'
const closedSidebarWidth = '5%'

onMounted(() => {
    // Access DOM elements after component is mounted
    sidebar.value = document.querySelector('.sidenav')
    mainContent.value = document.querySelector('.main_content')
    toggle.value = document.querySelector('.toggle')

    // Attach event listener to the toggle button
    toggle.value.addEventListener('click', toggleSidebar)
})

const toggleSidebar = () => {
    if (sidebar.value && mainContent.value) {
        sidebar.value.classList.toggle('closed')

        // Check if the "closed" class is present on the sidebar
        const isClosed = sidebar.value.classList.contains('closed')

        // Adjust widths based on the presence of the "closed" class
        if (isClosed) {
            sidebar.value.style.width = closedSidebarWidth
            mainContent.value.style.marginLeft = `calc(${closedSidebarWidth} + 1%)`
        } else {
            sidebar.value.style.width = sidebarWidth
            mainContent.value.style.marginLeft = `calc(${sidebarWidth} + 1%)`
        }
    }
}

const logout = () => {
    // Dispatch the 'logout' action from the store
    store
        .dispatch('logout')
        .then(() => {
            // Redirect to the login page or any other desired page
            router.push({ name: 'login' })
        })
        .catch((error) => {
            console.error('Logout error:', error)
        })
}
</script>
