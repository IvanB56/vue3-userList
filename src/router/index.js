import {createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog/Catalog";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Catalog,
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: () => import('../views/Favourites/Favourites'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
