<template>
<div class="container bg-white">

  <header class="header-main">
  <barTop />
  <barBrand />
  <bar />
  </header>

<!-- <barOption /> -->

  <div class="padding-1">
    <alertWarnning v-if="renderWarnning"
    title="Algo sucedió"
    :paragraph="restext"
    
    />

  </div>

<div class="grid cols-2 vertical-center">

    <div class="form-main ">

    <div class="form-main-input x-12">
    <h3 class="title-h3"> Ingresar </h3>
    <p class="paragraphs">
       ¿no tienes cuenta?,<n-link class="form-link" to="/Login/crearCuenta">  crea una, es gratis </n-link>

    </p>
    </div>

    <div class="form-main-input x-7">
    <label class="form-label" for="Email"> Email </label>
    <input id="Email" class="form-input" v-model="email" type="email" placeholder="email@micuenta.com" required >
    </div>

    <div class="form-main-input  x-7">
    <label class="form-label" for="celular">  Contraseña </label>
    <input id="celular" class="form-input" v-model="password" type="password" placeholder="* * * * * * * * *" required >
    <n-link class="form-link" to="/Login/recuperarContraseña"> ¿olvidaste tu contraseña? </n-link>
    </div>

    <div class="form-main-input  x-6"> 
    <button :disabled="isDisabled" class="form-btn" @click="loginProfile()">  ingresar </button>
    </div>
 
    </div>

</div>

  <footerIndex />

{{formState}}
</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import barBrand from "~/components/headers/brand";
import bar from "~/components/headers/bar";
import footerIndex from "~/components/footerIndex";
import alertWarnning from "~/components/alerts/warning";

import { logins } from "~/plugins/firebase/database";
import { SIGIN_ERROR } from "~/plugins/errors/errorSigIn";


export default {

  components:{
  barTop,
  barBrand,
  bar,
  footerIndex,
  alertWarnning,
 

  },

  data(){
  return {
  email : '',
  password : '',
  renderWarnning:false,
  isDisabled:false,
  restext: ''

  }
  },

    computed:{
  formState : function (){

  if(this.email != ''){
  this.isDisabled = false

  }else {
  this.isDisabled = true

  }

  }

  },

  beforeDestroy(){
  this.email, this.isDisabled, this.restext, this.password, this.renderWarnning = null

  },

 
  methods:{

  loginProfile(){

  logins.signInWithEmailAndPassword(this.email,this.password).then((result) => {

  if(result){
  window.location.href = "/"
  }

  }).catch((error) => {
  this.renderWarnning = true 
  this.sendError(error.code)


  });


  },

  sendError (errorCode){
 
  SIGIN_ERROR(errorCode).then( res =>{
   
  this.restext = res
   
  })
  }


  },

  head(){
  return {
  title:'Ingresar'
  }
  }


}
</script>