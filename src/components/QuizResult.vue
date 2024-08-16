<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import confetti from 'canvas-confetti';

const { 
    quizQuestionsLength, 
    numberOfCorrectAnswer 
} = defineProps([
    'quizQuestionsLength', 
    'numberOfCorrectAnswer'
]);

const totalScore = Math.round(numberOfCorrectAnswer / quizQuestionsLength * 100);
const displayScore = ref(false);
const scoreColor = ref('');
const isMusicPlaying = ref(true);

const resultBackgroundMusic = new Audio(new URL('../assets/soundeffect/resultbackgroundsong.mp3', import.meta.url).href);
resultBackgroundMusic.loop = true;

onMounted(() => {
    resultBackgroundMusic.play();

    setTimeout(() => {
        displayScore.value = true;
        scoreColor.value = totalScore <= 60 ? 'text-red-500' : 'text-green-500';

        // Trigger confetti based on the score
        if (totalScore <= 60) {
            showBadScoreConfetti();
            showTextEmojis();
        } else {
            showGoodScoreConfetti();
        }
    }, 7000);
});

onUnmounted(() => {
    resultBackgroundMusic.pause();
    resultBackgroundMusic.currentTime = 0;

    // Clear confetti and text emojis immediately
    confetti.reset(); // Stops any ongoing confetti effects
    confetti.clear(); // Removes all confetti
    
    // Remove text emojis containers immediately
    const textConfettiContainers = document.querySelectorAll('.textConfetti');
    textConfettiContainers.forEach(container => container.remove());
});

function toggleMusic() {
    if (isMusicPlaying.value) {
        resultBackgroundMusic.pause();
    } else {
        resultBackgroundMusic.play();
    }
    isMusicPlaying.value = !isMusicPlaying.value;
}

// Confetti for good score
function showGoodScoreConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Confetti for bad score
function showBadScoreConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffffff']
    });
}

// Function to display text and emojis
function showTextEmojis() {
    const container = document.createElement('div');
    container.className = 'fixed inset-0 flex items-center justify-center pointer-events-none textConfetti';
    document.body.appendChild(container);

    const texts = ['😆', 'NOPE', 'FAIL', 'NICE TRY'];
    texts.forEach(text => {
        const element = document.createElement('div');
        element.textContent = text;
        element.className = 'text-6xl font-bold animate-float text-red-500 opacity-0';
        container.appendChild(element);

        // Set random position
        element.style.position = 'absolute';
        element.style.top = `${Math.random() * 80}%`;
        element.style.left = `${Math.random() * 80}%`;

        // Animation effect
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transition = 'opacity 2s, transform 2s';
            element.style.transform = `translateY(-100px)`;
        }, Math.random() * 1000 + 500); // random delay

        // Remove after animation
        setTimeout(() => {
            element.remove();
        }, 4000); // remove after 4s
    });
}
</script>

<template>
    <div class="flex justify-center w-[80%] mx-auto">
        <div class="p-4 text-center rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden">
            <span class="text-xl font-medium font-kanit">Your Result Score</span>
            <!-- Display score after 7 seconds with the appropriate color and animation -->
            <h1 v-if="displayScore" :class="`text-5xl font-bold font-kanit ${scoreColor} fade-in-out`">{{ totalScore }}</h1>
            <p v-else class="text-5xl font-bold font-kanit text-gray-400">Loading...</p>
            <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat praesentium tempora voluptas fuga quia veritatis esse? Nihil, dolorum nobis.</p>
            <button
                v-if="displayScore"
                @click="toggleMusic"
                class="mt-4 px-4 py-2 bg-blue-500 text-white font-kanit rounded-lg transition-all hover:bg-blue-600"
            >
                {{ isMusicPlaying ? 'Pause Music' : 'Play Music' }}
            </button>
            <RouterLink v-if="displayScore" :to="{ name: 'quizes' }" class="block mt-4 px-4 py-2 bg-gray-500 text-white font-kanit rounded-lg transition-all hover:bg-gray-600">Go to Quizes</RouterLink>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.fade-in-out {
    animation: fade 0.5s infinite; /* Animasi dengan durasi 0.5 detik */
}

/* Floating animation for text/emojis */
@keyframes float {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px);
        opacity: 0;
    }
}

.animate-float {
    animation: float 3s ease-in-out forwards;
}
</style>
