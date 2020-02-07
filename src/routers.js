/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login.vue'
import Secure from './views/Secure.vue'
import store from './store'

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
        component: Secure,
        meta : {
            requiresAuth: true
        }
    }
]
    


const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/') 
    } else {
      next() 
    }
  })

export default router;