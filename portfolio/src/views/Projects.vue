<script setup>
import { ref } from 'vue'

// Array of project objects
const projects = ref([
    {
        title: '2023 Vue Project I - MAIRUU AIM',
        details: ['Create a match history to list the most recent playing scores, including mode, scores, coins, playtime, and date.', 'Adding a reset history function.', 'Improving CSS.'],
        links: [
            { label: 'repository', url: 'https://github.com/9INEJAMES/PROJECT1-SEC-2-Mairuu' },
            { label: 'preview', url: 'https://drive.google.com/file/d/1IMtLW2KtYJI6USXcsdsJZx_RerqxtEsY/view' },
        ],
    },
    {
        title: '2023 Vue Project II - Dim Sum (POS System)',
        details: [
            'Create a table operation system for employees, including table availability, table details, change order-items status, submit order.',
            'Create an order management system for employees, including an order list and change order-items status.',
        ],
        links: [
            { label: 'repository', url: 'https://github.com/9INEJAMES/PROJECT2-SEC-2-Mairuu' },
            { label: 'preview', url: 'https://drive.google.com/file/d/13A-dnV3qxfUE1h_pC-i49TGI2Oe3JQVE/view?pli=1' },
        ],
    },
    {
        title: '2024 Integrated Project - ITB KRADAN KANBAN',
        details: [
            'Design a database structure.',
            'Developed a backend system segment for task board.',
            'Implemented CRUD operations through REST APIs.',
            'Create compose.yml for automation deployment.',
        ],
        links: [{ label: 'repository', url: 'https://github.com/9INEJAMES/sj-1-integrated-1' }],
    },
])
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto mt-10 bg-gray-800 rounded-lg shadow-lg text-white">
        <h1 class="text-3xl font-bold mb-4">My Projects</h1>
        <ul class="space-y-4">
            <li
                v-for="project in projects"
                :key="project.title"
                class="border border-gray-600 p-4 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300 hover:shadow-lg transform hover:scale-105"
            >
                <strong class="text-xl text-white mb-2 block">{{ project.title }}</strong>
                <ul class="list-disc ml-6 mt-2 space-y-1 text-gray-300">
                    <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
                </ul>
                <div class="flex space-x-4 mt-2">
                    <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" class="text-blue-400 underline flex items-center space-x-1">
                        <span>{{ link.label }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Additional styles can go here */
</style>
