import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/quizes',
            name: 'quizes',
            component: () => import('../views/Quizes.vue')
        },
        {
            path: '/quizes/:id',
            name: 'quiz',
            component: () => import('../views/Quiz.vue'),
            props: true
        }
    ]
});

export default router;
