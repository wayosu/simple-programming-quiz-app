<script setup>
import { defineProps } from 'vue';

const { 
    question, 
    questionPage, 
    barPercentage 
} = defineProps([
    'question', 
    'questionPage', 
    'barPercentage'
]);
const emit = defineEmits(['selectedOption']);

function emitSelectedOption(option) {
    emit('selectedOption', option);
}
</script>

<template>
    <section class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <h1 class="font-medium">Progress</h1>
                <span class="text-xs">{{ barPercentage }}</span>
            </div>
            <div>
                <span id="ProgressLabel" class="sr-only">Loading</span>

                <span
                    role="progressbar"
                    aria-labelledby="ProgressLabel"
                    aria-valuenow="0"
                    class="block rounded-full bg-gray-200"
                >
                    <span
                        class="block h-3 rounded-full bg-blue-600"
                        :style="{ width: barPercentage }"
                    ></span>
                </span>
            </div>
        </div>
        <div class="flex flex-col gap-4 bg-white rounded-lg shadow p-4">
            <div class="flex flex-col gap-2">
                <span
                    class="inline-flex items-center gap-x-1 text-xs text-gray-400 font-medium"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <!-- question-mark-circle -->
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    QUESTION {{ questionPage }}
                </span>
                <p>
                    {{ question.text }}
                </p>
            </div>
            <div v-for="option in question.options" :key="option.id" class="flex flex-col gap-4">
                <div
                    @click="emitSelectedOption(option)"
                    class="flex flex-row gap-1 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-all cursor-pointer"
                >
                    <label class="font-medium">{{ option.label }}.</label>
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
