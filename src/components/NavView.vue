<template>
<div class="nav-view">

  <button>option1</button>

  <router-link
    to="/catalogo"
    tag="button"
  >catalogo</router-link>

    <button
      v-if="isLoggedIn"
      @click="logout"
    >logout</button>

      <button
        v-else
        @click="toLoginPage"
      >login</button>

</div>
</template>

<script>
export default {
  props: ["isLoggedIn"],
  methods: {
    logout() {
      console.log("emmiting event");
      this.$emit("onLogout");
    },
    toLoginPage() {
      this.$emit("toLoginPage");
    }
  }
};
</script>

<style scoped>
.nav-view {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
}
</style>
