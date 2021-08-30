import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Signup from "../components/auth/Signup"
import Signin from "../components/auth/Signin"
import Products from "../components/Products"
import Dashboard from "../components/Dashboard"
import Cart from "../components/Cart"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/signin',
    name:'signin',
    component:Signin
  },
  {
    path:'/auth/signup',
    name:'signup',
    component:Signup
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard
  },
  {
    path:'/products',
    name:'products',
    component:Products
  },
  {
    path:"/cart",
    name:'cart',
    component:Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
