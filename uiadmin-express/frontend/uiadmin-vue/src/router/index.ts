import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/base',
        component: () => import('@/pages/base.vue'),
        children: [
            {
                path: '/',
                component: () => import('@/pages/home.vue')
            },
            {
                path: '/user/login',
                component: () => import('@/pages/user/login.vue')
            },
            {
                path: '/user/register',
                component: () => import('@/pages/user/register.vue')
            }
        ]
    },
]

const router = createRouter({
   
    history: createWebHashHistory(),
    routes, // `routes: routes` 
})

export default router