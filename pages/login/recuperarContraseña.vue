<template>
<div class="container bg-white">

  <header class="header-main">
  <barTop />
  <barBrand />
  <bar />
  </header>
  
  <div class="padding-1">
    <alertSuccess v-if="renderSucces"
    title="Te enviamos un link!!"
    paragraph="revisa tu email "
    
    />
    
    <alertWarnning v-if="renderWarnning"
    title="Algo sucedió"
    :paragraph="restext"
    
    />

  </div>

  <div class="grid cols-2 ">

  <div class="form-main ">

  <div class="form-main-input x-12">
  <h3 class="title-h3"> recuperar contraseña </h3>
  <p class="paragraphs">
  volver <n-link class="form-link" to="/Login/ingresar">  ingresar  </n-link>

  </p>
  </div>

  <div class="form-main-input x-8">
  <p class="paragraphs"> Te enviaremos un link a tu email.  </p>

  </div>

  <div class="form-main-input x-7">
  <label class="form-label" for="Email"> Email </label>
  <input id="Email" class="form-input" type="email" v-model="email" placeholder="email@micuenta.com" required >
  </div>

  <div class="form-main-input x-8"> 
  <button :disabled="isDisabled" @click="sendLinkRessetPassword()" class="form-btn">  enviarme un link </button>

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
import alertSuccess from "~/components/alerts/succes";
import alertWarnning from "~/components/alerts/warning";

import { logins  } from "~/plugins/firebase/database";
import { SIGIN_ERROR } from "~/plugins/errors/errorSigIn";

export default {

  components:{
  barTop,
  barBrand,
  bar,
  footerIndex,
  alertSuccess,
  alertWarnning


  },

  data(){
  return {
  email : '',
  renderSucces:false,
  renderWarnning:false,
  isDisabled:false,
  restext: ''
  }
  },

  beforeDestroy(){
  this.email, this.renderSucces , this.restext, this.renderWarnning, this.isDisabled = null

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

  methods:{

  sendLinkRessetPassword (){

  this.renderWarnning=false
   
  logins.sendPasswordResetEmail(this.email).then( () => {

  this.renderSucces=true

   }).catch( (error)=>{

  this.renderSucces=false
  this.renderWarnning=true
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