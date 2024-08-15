<script setup>
import { ref, watch } from 'vue';
import srcQuiz from '../data/quizes.json';

import QuizCard from '../components/QuizCard.vue';

const quizes = ref(srcQuiz);
const search = ref('');

watch(search, () => {
    quizes.value = srcQuiz.filter((quiz) => {
        return quiz.title.toLowerCase().includes(search.value.toLowerCase());
    });
});
</script>

<template>
    <div>
        <div class="relative mb-6">
            <span
                class="pointer-events-none absolute inset-y-0 start-0 grid w-10 place-content-center text-gray-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-4 w-4"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    />
                </svg>
            </span>
            <input
                v-model.trim="search"
                type="search"
                id="search"
                placeholder="search quiz..."
                class="w-full rounded-md border border-gray-200 shadow-sm ps-9 sm:text-sm"
            />
        </div>

        <QuizCard :quizes="quizes" />
    </div>
</template>
