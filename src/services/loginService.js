import {
    BASE_URL,
    LOGIN,
    LOGIN_SUCCESS
} from '../config/config'
import axios from 'axios'

export const loginService = {
    sLogin
}
export function sLogin(commit, creds) {
    /*     console.log(BASE_URL, creds);
        commit(LOGIN);
        commit(LOGIN_SUCCESS);
        return new Promise(resolve => {
            setTimeout(() => {
                localStorage.setItem('user', 'JWT');
                resolve()
            }, 5000)
        }) */
    /*     commit(LOGIN);
        console.log(creds)
        return axios.post('https://test.agetic.gob.bo/apigateway/login/auth', creds, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) */
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    };
    fetch('http://test.agetic.gob.bo/apigateway/login/auth', requestOptions)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        });

}