<template>
<div class="bar-top"   :class="{ 'bar-top-render' : INFO }"> 

  <ul class="bar-top-ul" v-if="true">
  <li class="bar-top-li" @click="InfoState()"  v-if="!ISLOGIN"> <n-link to="/Login/ingresar" class="bar-top-li-link" > Ingresar </n-link> </li>
  <li class="bar-top-li" @click="InfoState()"  v-if="!ISLOGIN"> <n-link to="/Login/crearCuenta" class="bar-top-li-link" > Crear cuenta es gratis </n-link> </li>
  <li class="bar-top-li" @click="InfoState()"> <n-link to="/" class="bar-top-li-link"> Preguntas </n-link> </li>
  <li class="bar-top-li" @click="InfoState()"> <n-link to="/" class="bar-top-li-link"> Nosotros </n-link> </li>
  <li class="bar-top-li" @click="InfoState()"> <n-link to="/" class="bar-top-li-link"> clientes destacados </n-link> </li>

  <li class="bar-top-li" @click="InfoState()"  v-if="!ISLOGIN"> <n-link to="/" class="bar-top-li-link"  > <span class="icon-email-envelope"></span> Contacto </n-link> </li>
  <li class="bar-top-li" @click="InfoState()" v-if="OBJECTID == '4pz7ElFFC9OYVspahDREaVm7n2L2' " > 
    <n-link to="/perfil/createProduct" class="bar-top-li-link">
   <span class="icon-pencil"></span> publicar </n-link> </li>
 
  </ul>

</div>
</template>
<script>
import { mapState , mapMutations} from "vuex";

export default {

  computed:{
  ...mapState({
  ISLOGIN : state => state.profile.isLogin,
  INFO : state => state.frontend.InfoBarMobile,
  OBJECTID : state => state.profile.objectID,
  })
  },

  methods:{
  ...mapMutations({
  InfoState : 'frontend/infoMobileState',

  }),


  }

}
</script>
<style lang="scss">
@import "~/assets/styles/_screen";

.bar-top{
  @include desktop {
  &:before { content: ""; width: 10000px; position: fixed; top: 0em; left: 0em;   height: 40px;
  background: rgb(27, 27, 27);}
  }
  
  position: fixed; background: rgb(27, 27, 27); width: 100%;  z-index: 6000;
  top: -100%; transition: top .5s ease-in-out; max-width: 1600px; box-sizing: border-box; padding: 1em ;
 @include tablet  {padding: 0em ; top: 0em;   height: 40px;  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); }
}

.bar-top-render{ top: 0em; }

.bar-top-ul{ position: relative;  height: 100%;   
    display: grid; grid-template-columns: repeat(1, 1fr);  
    @include tablet {  grid-template-columns: repeat(7, 1fr);  align-items: center; }

}


.bar-top-li{  text-align: start;  box-sizing: border-box; 
  padding: 1em 0em;
  @include tablet { text-align: center; padding: 0em 0em; }
}

.bar-top-li-link{ font-size: .9em;  text-decoration: none;
    color: rgb(255, 255, 255);  font-family: 'Poppins', sans-serif;
    &:hover { text-decoration: underline; }
}


</style>