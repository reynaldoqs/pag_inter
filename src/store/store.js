import Vue from 'vue';
import Vuex from 'vuex';
import {
  sLogin,
} from '../services/loginService';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../config/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('user'),
    pending: true,
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
    },

  },
  actions: {
    login({
      commit,
    }, creds) {
      commit(LOGIN);
      sLogin(commit, creds);
    },
    logout({
      commit,
    }) {
      return new Promise((resolve) => {
        commit(LOGOUT);
        localStorage.removeItem('user');
        resolve();
      });

    },

  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    isPending: state => {
      return state.pending;
    },
  },
});