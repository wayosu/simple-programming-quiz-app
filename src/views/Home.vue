<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <div
            class="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        >
            <div
                class="flex flex-col gap-y-8 lg:items-center lg:gap-x-16"
            >
                <div
                    class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                >
                    <h2 class="text-3xl font-bold sm:text-4xl">
                        Programming Quiz, for everyone.
                    </h2>

                    <p class="mt-4 text-gray-600">
                        Programming Quiz is a fun and interactive way to learn programming. Whether you're just starting out or looking to challenge yourself, this quiz has something for everyone.
                    </p>

                    <RouterLink  
                        :to="{ name: 'quizes' }"
                        class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Search Quizes &rarr;
                    </RouterLink>
                </div>


                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div
                        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="#"
                    >
                        <span class="inline-block rounded-lg bg-green-500 p-3">
                            🐣
                        </span>

                        <h2 class="mt-2 font-bold">Beginner</h2>

                        <p
                            class="sm:mt-1 sm:text-sm sm:text-gray-600"
                        >
                            For those who are new to coding
                        </p>
                    </div>

                    <div
                        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="#"
                    >
                        <span class="inline-block rounded-lg bg-yellow-500 p-3">
                            🦉
                        </span>

                        <h2 class="mt-2 font-bold">Intermediate</h2>

                        <p
                            class="sm:mt-1 sm:text-sm sm:text-gray-600"
                        >
                            For those with some experience.
                        </p>
                    </div>

                    <div
                        class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="#"
                    >
                        <span class="inline-block rounded-lg bg-red-500 p-3">
                            🦅
                        </span>

                        <h2 class="mt-2 font-bold">Advanced</h2>

                        <p
                            class="sm:mt-1 sm:text-sm sm:text-gray-600"
                        >
                            For seasoned programmers ready to tackle more complex challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
