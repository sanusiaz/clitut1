import {createWebHistory, createRouter} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import AboutUsComponent from './components/AboutUsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import FaqsComponent from './components/FaqsComponent.vue'
import UserComponent from './components/UserComponent.vue'
import PageNotFoundComponent from './components/PageNotFoundComponent.vue'
import JobsComponent from './components/Api/JobsComponent.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'Contact',
        path: '/contact',
        component: ContactComponent
    },
    {
        name: 'Faqs',
        path: '/faqs',
        component: FaqsComponent
    },
    {
        name: 'About',
        path: '/about',
        component: AboutUsComponent
    },
    {
        name: 'User',
        path: '/user/:name',
        component: UserComponent
    },
    {
        name: 'ApiGet',
        path: '/jobs',
        component: JobsComponent
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFoundComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;