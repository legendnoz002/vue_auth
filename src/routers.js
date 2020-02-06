/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login.vue'
import Secure from './views/Secure.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/protected',
        name: 'secure',
        component: Secure
    }
]
    


const router = new VueRouter({
    routes
})

export default router;