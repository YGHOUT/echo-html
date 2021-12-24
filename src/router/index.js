import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/LoginAndRegister/Login'
import Test from '@/views/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        component: Login
      }
    ]
  },
  {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
