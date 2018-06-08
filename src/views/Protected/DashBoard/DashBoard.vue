<template>
<div class="dash-board">
  <div class="side-bar-container">
    <SideBarComponent/>
  </div>
  <div class="main-container">
    <NavComponent/>
    <CatalogoComponent/>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import NavComponent from "../../../components/NavComponent";
import SideBarComponent from "../../../components/SideBarComponent";
import CatalogoComponent from "../../../components/CatalogoComponent";
export default {
  data() {
    return {
      servicios: ''
    }
  },
  components: {
    NavComponent,
    SideBarComponent,
    CatalogoComponent
  },
  mounted() {

    axios.get('https://test.agetic.gob.bo/apigateway/servicios').then(data => {
      this.servicios = data.data.servicios
    })
  }
};
</script>

<style scoped>
.dash-board {
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
}

.side-bar-container {
  height: 100vh;
  background-color: blueviolet;
}

.main-container {
  width: 100%;
}
</style>
