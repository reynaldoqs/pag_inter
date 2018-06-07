<template>
  <div class="login">
        <div class="left-section"></div>
        <div class="right-section"></div>
        <div class="login-container">
          <div class="login-form">
            <div class="logo">
              <pre>
                pending{{isPending}}
              </pre>
            </div>
            <form @submit.prevent="login({user, pass})">
              <vs-input vs-color="primary"
              :vs-valid.sync="validos.usuario"
              vs-success-text="Usuario Valido"
              vs-danger-text="El suaurio es necesario"
              vs-min="1"
              vs-type="text" vs-label-placeholder="Usuario" v-model="user"/>

              <vs-input vs-color="primary"
              :vs-valid.sync="validos.password"
              vs-success-text="Contra Valido"
              vs-danger-text="La contraseña es necesaria"
              vs-type="password"
              :vs-validation-function="passValidation"
              vs-label-placeholder="Contraseña" v-model="pass"/>
              <vs-button vs-type="success-gradient"
                        type="submit"
                        class="submit-button"
                        @click="login"
                        :disabled="!validos.usuario">Login</vs-button>
        </form>
          <div class="vs-progress-fake" v-if="isPending"></div>
          <vs-progress v-if="!isPending" vs-indeterminate class="login-progress"></vs-progress>
          </div>
        </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "scriales",
      pass: "123456",
      validos: {
        usuario: false,
        password: false
      }
    };
  },
  methods: {
    login() {
      /*       this.$store.dispatch("login", {
        usuario: this.user,
        clave: this.pass
      }); */
      console.log("we gonna try again!");
      axios
        .post("https://test.agetic.gob.bo/apigateway/login/auth", {
          usuario: this.user,
          clave: this.pass
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },
    passValidation(input) {
      return true;
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isPending() {
      return this.$store.getters.isPending;
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  --right-size: 350px;
}
.left-section {
  background-color: var(--inter-secondary);
  width: calc(100% - var(--right-size));
  height: 100%;
}
.right-section {
  background-color: var(--inter-primary);
  width: var(--right-size);
  height: 100%;
}
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: calc(var(--right-size) / 2); /* Quitar para el responsive */
  position: absolute;
}
.login-form {
  background-color: var(--inter-clean-color);
  border-radius: 2px;
  width: 400px;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}
.logo {
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.login-form > form {
  margin: 50px 0;
  padding: 20px;
}
.login-progress {
  display: block !important;
  border-radius: 0 !important;
}
.vs-progress-fake {
  width: 100%;
  height: 8px;
}
</style>
