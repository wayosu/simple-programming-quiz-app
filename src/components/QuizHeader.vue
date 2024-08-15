<script setup>
import { defineProps } from 'vue';

const { title, desc, level } = defineProps(['title','desc','level']);
</script>

<template>
    <header class="flex flex-col gap-3">
        <div>
            <h1 class="text-xl font-medium mb-1">{{ title }}</h1>
            <p class="text-gray-500">
                {{ desc }}
            </p>
        </div>
        <div class="flex flex-row items-center gap-0.5">
            <span
                class="text-xs rounded-s-full bg-gray-500 px-3 py-1 text-white shadow"
                >5 Questions</span
            >
            
            <span
                v-if="level === 'Beginner'"
                class="text-xs rounded-e-full bg-green-500 px-3 py-1 text-white shadow"
                >🐣 Beginner</span
            >

            <span
                v-else-if="level === 'Intermediate'"
                class="text-xs rounded-e-full bg-yellow-500 px-3 py-1 text-white shadow"
                >🦉 Intermediate</span
            >

            <span
                v-else-if="level === 'Advanced'"
                class="text-xs rounded-e-full bg-red-500 px-3 py-1 text-white shadow"
                >🦅 Advanced</span
            >
        </div>
    </header>
</template>
