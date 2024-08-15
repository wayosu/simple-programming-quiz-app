<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';

import QuizHeader from '../components/QuizHeader.vue';
import QuizContent from '../components/QuizContent.vue';
import QuizResult from '../components/QuizResult.vue';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const questionPage = computed(() => {
    return `${currentQuestionIndex.value + 1}/${quiz.questions.length}`;
});
const barPercentage = computed(() => {
    return `${Math.round(((currentQuestionIndex.value + 1) / quiz.questions.length) * 100)}%`; 
});

function onSelectedOption(option) {
    if (option.correct) {
        numberOfCorrectAnswer.value++;
    }

    if (currentQuestionIndex.value === quiz.questions.length - 1) {
        showResult.value = true;
        return;
    }

    currentQuestionIndex.value++;
}
</script>

<template>
    <div class="flex flex-col gap-12">
        <QuizHeader :title="quiz.title" :desc="quiz.desc" :level="quiz.level" />

        <QuizContent 
            v-if="!showResult"
            :question="quiz.questions[currentQuestionIndex]" 
            :questionPage="questionPage"
            :barPercentage="barPercentage"
            @selectedOption="onSelectedOption"
        />

        <QuizResult 
            v-else
            :quizQuestionsLength="quiz.questions.length"
            :numberOfCorrectAnswer="numberOfCorrectAnswer"
        />
    </div>
</template>
