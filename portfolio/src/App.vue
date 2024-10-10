<template>
    <div class="min-h-screen flex flex-col">
        <header class="navbar bg-base-200">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Portfolio</a>
            </div>
            <div class="flex-none space-x-4">
                <router-link to="/" class="btn btn-link">Home</router-link>
                <router-link to="/about" class="btn btn-link">About</router-link>
                <router-link to="/projects" class="btn btn-link">Projects</router-link>
                <router-link to="/activities" class="btn btn-link">Activities</router-link>

                <router-link to="/contact" class="btn btn-link">Contact</router-link>
            </div>
        </header>

        <main class="flex-grow p-6">
            <router-view />
        </main>

        <footer class="footer footer-center p-4 bg-base-200">
            <div>
                <p>© 2024 Natthaphol Nirattisaiikul. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>
