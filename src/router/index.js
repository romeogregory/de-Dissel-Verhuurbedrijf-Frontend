import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Register from '@/views/Register.vue'
import Assortiment from '@/views/Assortiment.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/assortiment',
        name: 'Assortiment',
        component: Assortiment,
        // meta: {
        //     requiresAuth: true,
        // }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
