<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { quizes } = defineProps(['quizes']);
const router = useRouter();

const goToQuiz = (quizId) => {
    router.push({ name: 'quiz', params: { id: quizId } });
};
</script>

<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="quiz in quizes"
            :key="quiz.id"
            @click="goToQuiz(quiz.id)"
            class="group rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden cursor-pointer hover:shadow-md transition-all"
        >
            <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <div class="block shrink-0 relative overflow-hidden rounded-lg">
                    <img
                        :alt="quiz.title"
                        :src="quiz.img"
                        class="size-14 object-cover group-hover:scale-105 transition-all"
                    />
                </div>

                <div>
                    <h3 class="font-medium sm:text-lg">
                        {{ quiz.title }}
                    </h3>

                    <p class="line-clamp-2 text-sm text-gray-700">
                        {{ quiz.desc }}
                    </p>

                    <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center gap-1 text-gray-500">
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

                            <p class="text-xs">
                                {{ quiz.questions.length }} Questions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <div v-if="quiz.level === 'Beginner'">
                    <strong
                        class="-mb-[1px] -me-[1px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-500 px-3 py-1.5 text-white"
                    >
                        <span class="text-[10px] font-medium sm:text-xs">
                            🐣 {{ quiz.level }}
                        </span>
                    </strong>
                </div>

                <div v-else-if="quiz.level === 'Intermediate'">
                    <strong
                        class="-mb-[1px] -me-[1px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-yellow-500 px-3 py-1.5 text-white"
                    >
                        <span class="text-[10px] font-medium sm:text-xs">
                            🦉 {{ quiz.level }}
                        </span>
                    </strong>
                </div>

                <div v-else-if="quiz.level === 'Advanced'">
                    <strong
                        class="-mb-[1px] -me-[1px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-500 px-3 py-1.5 text-white"
                    >
                        <span class="text-[10px] font-medium sm:text-xs">
                            🦅 {{ quiz.level }}
                        </span>
                    </strong>
                </div>
            </div>
        </article>
    </div>
</template>
