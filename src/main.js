import Vue from 'vue';
import Vuesax from 'vuesax';
import axios from 'axios';
import 'vuesax/dist/vuesax.css';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';
import './assets/styles.css';

axios.defaults.headers.post['Content-Type'] = 'application/json';
/* const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
} */

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#360023',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)',
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');