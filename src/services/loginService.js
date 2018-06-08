import axios from 'axios';
import {
  BASE_URL,
  LOGIN_SUCCESS,
} from '../config/config';


export const sLogin = (commit, creds) => {
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL, creds)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        commit(LOGIN_SUCCESS);
        console.log('after push user');
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export const loginService = {
  sLogin,
};