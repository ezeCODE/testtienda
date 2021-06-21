<template>
<div class="brand-container">

  <div class="brand">
  <img class="brand-img" lazy="loading" src="@/assets/img/logo-2.png" alt="brand" >
  </div>

  <label class="brand-label-search" @click="closeModal()">  Buscar producto </label>

  <div  v-if="LOADER">
  <loader class="loader-profile" />
 </div>
  
  <div v-else>
  <div class="user-area"  v-if="!ISLOGIN"  >
  <n-link class="button-top-rigth" to="/Login/ingresar">
  <span class="icon icon-lock-secure-1"></span> Login
  </n-link>
  </div> 

  <div class="user-area" v-else >
  <n-link class="button-top-rigth" to="/Perfil/">
  <span class="icon icon-user"></span> Mis datos
  </n-link>
  </div> 
  </div>

</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import loader from "~/components/modals/loader";


export default {


  components:{
    loader

  },

  methods:{
  ...mapMutations({
  closeModal: 'frontend/modalSearch'
  })

  },


  computed:{
  ...mapState({
  ISLOGIN : state => state.profile.isLogin,
  LOADER : state => state.profile.loader
  })

  }

}
</script>