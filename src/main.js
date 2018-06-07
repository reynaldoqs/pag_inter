import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import Vuesax from 'vuesax'

/* Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://test.agetic.gob.bo/apigateway/login/auth'
Vue.http.headers.common['Access-Control-Request-Method'] = '*' */

import 'vuesax/dist/vuesax.css'
import './assets/styles.css'
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#360023',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')