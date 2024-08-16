<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="pb-16">
        <div class="bg-white rounded-xl shadow-sm">
            <div
                class="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative z-10"
            >
                <div class="flex flex-col gap-y-8 lg:items-center lg:gap-x-16">
                    <div
                        class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 class="text-3xl font-bold sm:text-4xl">
                            Programming Quiz, for everyone.
                        </h2>

                        <p class="mt-4 text-gray-600">
                            Programming Quiz is a fun and interactive way to
                            learn programming. Whether you're just starting out
                            or looking to challenge yourself, this quiz has
                            something for everyone.
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
                            <span
                                class="inline-block rounded-lg bg-green-500 p-3"
                            >
                                🐣
                            </span>

                            <h2 class="mt-2 font-bold">Beginner</h2>

                            <p class="sm:mt-1 sm:text-sm sm:text-gray-600">
                                For those who are new to coding
                            </p>
                        </div>

                        <div
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span
                                class="inline-block rounded-lg bg-yellow-500 p-3"
                            >
                                🦉
                            </span>

                            <h2 class="mt-2 font-bold">Intermediate</h2>

                            <p class="sm:mt-1 sm:text-sm sm:text-gray-600">
                                For those with some experience.
                            </p>
                        </div>

                        <div
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span
                                class="inline-block rounded-lg bg-red-500 p-3"
                            >
                                🦅
                            </span>

                            <h2 class="mt-2 font-bold">Advanced</h2>

                            <p class="sm:mt-1 sm:text-sm sm:text-gray-600">
                                For seasoned programmers ready to tackle more
                                complex challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex items-center justify-center bg-gradient-to-t from-white to-blue-50 rounded-xl shadow-sm mt-10 max-w-2xl mx-auto"
        >
            <div class="container mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative z-10">
                <div class="flex items-center justify-center gap-4">
                    <img
                        src="https://avatars.githubusercontent.com/u/53135509?s=400&u=313ad026fcd19c4858680677562f73a39e222ee4&v=4"
                        alt="profile-img"
                        class="w-20 h-20 md:w-40 md:h-40 rounded-full"
                    />
                    <div class="flex flex-col">
                        <h1 class="md:text-lg font-bold mb-2">Develop By Wayosu</h1>
                        <a
                            href="https://github.com/wayosu"
                            target="_blank"
                            class="inline-flex items-center gap-0.5 bg-black text-white px-3 py-1.5 rounded-full max-w-[105px] text-center font-kanit"
                        >
                            <img
                                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                                alt="github-logo"
                                class="w-4 h-4 filter invert"
                            />
                            <p class="text-xs">@wayosu</p>
                        </a>
                        <p class="mt-2 text-gray-600 text-sm">
                            I'm just an ordinary person who wants to be a developer. Trying to be good and useful.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="bg-gradient-to-t from-white to-blue-50 absolute inset-0 -z-10"
        ></div>
    </section>
</template>
