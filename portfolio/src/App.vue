<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="navbar bg-base-200 shadow-md">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl text-primary">Portfolio</a>
            </div>
            <div class="flex-none space-x-2">
                <!-- Loop through links to avoid repeating code -->
                <router-link to="/" class="btn btn-link" :class="{ 'text-secondary font-semibold': route.name === 'Home' }">Home</router-link>
                <router-link to="/about" class="btn btn-link" :class="{ 'text-secondary font-semibold': route.name === 'About' }">About</router-link>
                <router-link to="/projects" class="btn btn-link" :class="{ 'text-secondary font-semibold': route.name === 'Projects' }">Projects</router-link>
                <router-link to="/activities" class="btn btn-link" :class="{ 'text-secondary font-semibold': route.name === 'Activities' }">Activities</router-link>
                <router-link to="/contact" class="btn btn-link" :class="{ 'text-secondary font-semibold': route.name === 'Contact' }">Contact</router-link>
            </div>
        </header>

        <!-- Main content area -->
        <main class="flex-grow p-6 bg-base-100 text-gray-800">
            <router-view />
        </main>

        <!-- Footer -->
        <footer class="footer footer-center p-4 bg-base-200 text-base-content border-t border-gray-300">
            <div>
                <p class="text-sm text-gray-600">© 2024 Natthaphol Nirattisaiikul. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>
