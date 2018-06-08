<template>
<div class="nav-component">
  <NavView
    :isLoggedIn="isLoggedIn"
    v-on:onLogout="logout"
    v-on:toLoginPage="toLogin"
  />
</div>
</template>

<script>
import NavView from "./NavView";
export default {
  components: {
    NavView
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      console.log("loggin out");
      this.$store.dispatch("logout");
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
