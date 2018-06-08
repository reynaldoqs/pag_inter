/* import axios from 'axios';
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from '../actions/auth';
import {
  USER_REQUEST
} from '../actions/user';
import {
  BASE_URL
} from '../../config/config';

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false,
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: ({
    commit,
    dispatch,
  }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      axios.post(BASE_URL, user)
        .then(data => {
          console.log('here is de user');
          console.log(data.data.accesos.token);
          localStorage.setItem('user-token', data.data.accesos.token);
          commit(AUTH_SUCCESS, data);
          dispatch(USER_REQUEST);
          resolve(data);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err);
        })
    })
  },
  [AUTH_LOGOUT]: ({
    commit,
    dispatch,
  }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem('user-token');
      resolve();
    });
  },
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}; */