import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UserProfile from './components/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/',component:Home},
    {path:'/login',component:Login,name:'Login'},
    {path:'/register',component:Register},
    { path:'/user/:id', component:UserProfile},
    { path: "*", redirect: '/'}
  ]

export default  new VueRouter({
   routes,
   mode: 'history'
})