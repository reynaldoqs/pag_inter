import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import LoginPage from '../views/LoginPage/LoginPage'
import DashBoard from '../views/DashBoard/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dasboard',
      component: DashBoard
    }
  ]
})