<template>
    <div class="home">
        <NavComponent/>
        <router-view/>
    </div>
</template>
<script>
import NavComponent from "../../../components/NavComponent";
export default {
  components: {
    NavComponent
  }
};
</script>

