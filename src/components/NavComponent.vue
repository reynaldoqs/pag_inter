<template>
    <div class="nav-component">
        <ul>
            <li>option normal</li>
            <li v-if="isLoggedIn">option admin</li>
            <li v-if="isLoggedIn" class="avatar-btn">
                <vs-avatar vs-color="warning" vs-text="warning"/>
            </li>
            <li v-if="!isLoggedIn" class="login-btn">
                <router-link class="link" to="/login">Login</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.nav-component {
  width: 100%;
  height: 60px;
  background-color: var(--inter-clean-color);
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
ul {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0 0 0 20px;
}
li > .link {
  color: var(--inter-clean-color);
  line-height: 60px;
}
.avatar-btn {
  margin-left: auto;
}
.login-btn {
  padding: 0 20px;
  height: 100%;
  background-color: var(--inter-primary);
  margin-left: auto;
}
</style>

