<script setup>
import { ref } from 'vue'

// Array of activity objects
const activities = ref([
    {
        title: 'JavaScript Tutor',
        period: 'INT201 Course, KMUTT — September 2024 to Present',
        details: [
            'Conducted tutoring sessions for 2nd-year students in the INT201 JavaScript course, focusing on foundational JavaScript concepts.',
            'Created practice problems and exercises to reinforce concepts related to loops, conditionals, and function writing.',
            'Mentored students on debugging techniques and problem-solving strategies in JavaScript.',
            'Provided additional academic support to help students prepare for exams and coursework.',
        ],
    },
])
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto mt-10 bg-gray-800 rounded-lg shadow-lg text-white">
        <h1 class="text-3xl font-bold mb-4">My Activities</h1>
        <ul class="space-y-4">
            <li
                v-for="activity in activities"
                :key="activity.title"
                class="border border-gray-600 p-4 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300 hover:shadow-lg transform hover:scale-105"
            >
                <strong class="text-xl text-white mb-1 block">{{ activity.title }}</strong>
                <p class="text-gray-400 mb-2">{{ activity.period }}</p>
                <ul class="list-disc ml-6 mt-2 space-y-1 text-gray-300">
                    <li v-for="detail in activity.details" :key="detail">{{ detail }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Additional styles can go here */
</style>
