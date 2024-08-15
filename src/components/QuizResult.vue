<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { 
    quizQuestionsLength, 
    numberOfCorrectAnswer 
} = defineProps([
    'quizQuestionsLength', 
    'numberOfCorrectAnswer'
]);

const totalScore = Math.round(numberOfCorrectAnswer / quizQuestionsLength * 100);
</script>

<template>
    <div class="flex justify-center w-[80%] mx-auto">
        <div class="p-4 text-center rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden">
            <span class="text-xl font-medium font-kanit">Your Result Score</span>
            <h1 class="text-5xl font-bold font-kanit">{{ totalScore }}</h1>
            <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat praesentium tempora voluptas fuga quia veritatis esse? Nihil, dolorum nobis.</p>
            <RouterLink :to="{ name: 'quizes' }" class="block mt-4 px-4 py-2 bg-green-500 text-white font-kanit rounded-lg transition-all hover:bg-green-600">Go to Quizes</RouterLink>
        </div>
    </div>
</template>
