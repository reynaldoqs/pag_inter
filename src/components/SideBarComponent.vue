<template>
    <div class="side-bar-component">
        <SideBarView :user="user"/>
    </div>
</template>
<script>
import SideBarView from "./SideBarView";
export default {
  data(){
    return{
      user:''
    }
  },
  components: {
    SideBarView
  },
  mounted(){
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }
};
</script>

