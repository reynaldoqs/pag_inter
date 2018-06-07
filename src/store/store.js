import Vue from 'vue'
import Vuex from 'vuex'
import {
  sLogin
} from '../services/loginService'
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
/* import axios from 'axios'
import {
  url
} from '../config/config'
 */
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('user'),
    pending: true
  },
  mutations: {
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    }

  },
  actions: {
    login({
      commit
    }, creds) {
      return sLogin(commit, creds)
    },
    logout({
      commit
    }) {
      localStorage.removeItem("user");
      commit(LOGOUT);
    }

  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    isPending: state => {
      return state.pending
    }
  }
})