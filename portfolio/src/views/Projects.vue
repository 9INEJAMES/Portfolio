<script setup>
import { ref } from 'vue'

// Array of project objects
const projects = ref([
    {
        title: '2023 Vue Project I - MAIRUU AIM',
        description: [
            'An aiming game where players click targets to damage monsters. Players must clear all monsters to complete a stage.',
            'Features include match history tracking and a reset history option.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'Node.js', 'CSS'],
        links: [
            { label: 'Repository', url: 'https://github.com/9INEJAMES/PROJECT1-SEC-2-Mairuu' },
            { label: 'Preview', url: 'https://drive.google.com/file/d/1IMtLW2KtYJI6USXcsdsJZx_RerqxtEsY/view' },
        ],
    },
    {
        title: '2023 Vue Project II - Dim Sum (POS System)',
        description: [
            'A POS system for a dim sum restaurant that supports employee and order management as well as customer ordering.',
            'Includes table management, order status updates, and functionality for admins and employees.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'Node.js', 'Json Server', 'CSS'],
        links: [
            { label: 'Repository', url: 'https://github.com/9INEJAMES/PROJECT2-SEC-2-Mairuu' },
            { label: 'Preview', url: 'https://drive.google.com/file/d/13A-dnV3qxfUE1h_pC-i49TGI2Oe3JQVE/view?pli=1' },
        ],
    },
    {
        title: '2024 Integrated Project - ITB KRADAN KANBAN',
        description: [
            'A task board system featuring CRUD operations via REST APIs for comprehensive task management.',
            'Includes a structured database design and automated deployment using a Docker Compose file.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
        links: [{ label: 'Repository', url: 'https://github.com/9INEJAMES/sj-1-integrated-1' }],
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
                    <li v-for="desc in project.description" :key="desc">{{ desc }}</li>
                </ul>
                <p class="mt-2 text-gray-400">
                    Technologies Used: <span class="text-gray-300">{{ project.technologies.join(', ') }}</span>
                </p>
                <div class="flex flex-wrap space-x-4 mt-2">
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
