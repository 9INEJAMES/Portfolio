<script setup>
import { ref } from 'vue'

// Data arrays for each section
const education = ref([
  'CHONRADSADORNMURNG SCHOOL (2018-2022)',
  "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY THONBURI (2022-2024, GPAX 3.21)"
])

const softSkills = ref([
  'Communication',
  'Collaboration',
  'Agile',
  'Time management',
  'Problem solving',
  'Fast learner',
  'Empathy'
])

const hardSkills = ref([
  'Programming Paradigms: OOP, Functional programming',
  'Languages: Java, JavaScript, SQL, HTML, CSS',
  'Frameworks: Vue.js, Spring Boot, Tailwind CSS, Bootstrap',
  'Databases: MySQL Workbench, MongoDB',
  'Commands: Git, Linux',
  'Tools: GitHub, IntelliJ, Visual Studio Code, Postman, Docker (Dockerfile, Compose)'
])
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto mt-10 bg-gray-800 rounded-lg shadow-lg text-gray-200">
    <h1 class="text-3xl font-bold mb-4">About Me</h1>

    <!-- Profile Section -->
    <section class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 flex items-center">
        <span class="mr-2">👤</span> Profile
      </h3>
      <p>
        I am a third-year student pursuing a Bachelor's degree in Information Technology at King Mongkut's University of Technology Thonburi.
        I have a strong passion for programming, particularly in Backend development. I am eager to apply my skills and knowledge in a practical environment and am seeking an internship opportunity.
      </p>
    </section>

    <!-- Education Section -->
    <section class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 flex items-center">
        <span class="mr-2">🎓</span> Education
      </h3>
      <ul class="list-disc ml-6">
        <li v-for="item in education" :key="item">{{ item }}</li>
      </ul>
    </section>

    <!-- Skills Section -->
    <section>
      <h3 class="text-2xl font-semibold mb-2 flex items-center">
        <span class="mr-2">💼</span> Skills
      </h3>
      <div>
        <h4 class="text-xl font-medium mb-1 flex items-center">
          <span class="mr-2">✨</span> Soft Skills
        </h4>
        <ul class="list-disc ml-6 mb-4">
          <li v-for="skill in softSkills" :key="skill">{{ skill }}</li>
        </ul>
      </div>

      <div>
        <h4 class="text-xl font-medium mb-1 flex items-center">
          <span class="mr-2">💻</span> Hard Skills
        </h4>
        <ul class="list-disc ml-6">
          <li v-for="skill in hardSkills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Additional styles can go here */
</style>
