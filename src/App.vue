<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between py-6">
            <h1 class="text-3xl font-bold font-kanit">QuizApp</h1>

            <div class="flex flex-row">
                <RouterLink :to="{ name: 'home' }" class="px-4 py-2 text-black font-kanit rounded-lg transition-all hover:text-blue-600">Home</RouterLink>
                <RouterLink :to="{ name: 'quizes' }" class="px-4 py-2 text-black font-kanit rounded-lg transition-all hover:text-blue-600">Quizes</RouterLink>
            </div>
        </nav>
        
        <RouterView />
    </div>
</template>
