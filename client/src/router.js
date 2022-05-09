import {createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import HomePage from './pages/HomePage.vue';
import GeneratePage from './pages/GeneratePage.vue';
import MySchedule from './pages/MySchedule.vue';

const routes = [
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/homepage', component: HomePage},
    { path: '/generatepage', component: GeneratePage},
    { path: '/myschedule', component: MySchedule},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;