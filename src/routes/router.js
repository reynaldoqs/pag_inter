import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/UnProtected/Home/Home'
import LoginPage from '../views/UnProtected/LoginPage/LoginPage'
import DashBoard from '../views/Protected/DashBoard/DashBoard'
/* children routes */
import Catalogo from '../views/UnProtected/Catalogo/Catalogo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: "catalogo",
        name: "catalogo",
        component: Catalogo
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})