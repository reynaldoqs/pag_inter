/* import Vue from 'vue';
import {
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
} from '../actions/user';
import {
  AUTH_LOGOUT,
} from '../actions/auth';

const state = {
  status: '',
  profile: {},
};

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
};

const actions = {
  [USER_REQUEST]: ({
    commit,
    dispatch,
  }) => {
    commit(USER_REQUEST);
    // axios here
     apiCall({
        url: 'user/me',
      })
      .then(resp => {
        commit(USER_SUCCESS, resp);
      })
      .catch(resp => {
        commit(USER_ERROR);
        dispatch(AUTH_LOGOUT);
      })
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success';
    Vue.set(state, 'profile', resp);
  },
  [USER_ERROR]: (state) => {
    state.status = 'error';
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}; */