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
    {{restext}}
    </div>

    <div>
    <div class="grid cols-2 vertical-center" v-if="!ISLOGIN" >
    <div class="form-main ">
    <div class="form-main-input  x-12">
    <h3 class="title-h3"> Crear cuenta </h3>
    <p class="paragraphs">
      tengo cuenta,<n-link class="form-link" to="/Login/ingresar"> quiero ingresar </n-link>
    </p>
    </div>

    <div class="form-main-input  x-7">
    <label class="form-label" for="Email"> Email </label>
    <input id="Email" v-model="email" class="form-input" type="email" placeholder="email@micuenta.com"  required >
    </div>

    <div class="form-main-input  x-7">
    <label class="form-label" for="Contraseña">  Contraseña </label>
    <input id="Contraseña" v-model="password" class="form-input" type="tel" placeholder="* * * * * * * * *" required >
    </div>

    <div class="form-main-input  x-6"> 
    <button :disabled="isDisabled" class="form-btn" @click="createUser()">  Crear cuenta </button>
    </div>
 
    </div>

    <p class="paragraphs">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab natus adipisci deserunt ullam eaque placeat porro quod, ratione repellat nobis, officia facere itaque. Error, amet! Sunt dignissimos unde sapiente iure.
    Similique nostrum expedita dolore voluptatem maxime numquam asperiores debitis doloremque voluptas officia perferendis quas nemo eveniet esse vel praesentium quia eius laboriosam, eum pariatur blanditiis delectus, voluptatum fuga? Temporibus, quam.
    Nostrum animi minima sunt expedita, nemo nobis eveniet illum dignissimos quae, quasi eligendi, saepe dolorem a. Tempora dolorum, veniam quia laborum ipsum doloribus autem eos, asperiores tenetur dicta quibusdam odit!
    </p>
 
    </div>

  <btnFloat />
  <footerIndex />
  
{{formState}}
</div>
</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import barBrand from "~/components/headers/brand";
import bar from "~/components/headers/bar";
import btnFloat from "~/components/buttons/buttonFloat";
import footerIndex from "~/components/footerIndex";
import alertWarnning from "~/components/alerts/warning";

import { logins  } from "~/plugins/firebase/database";
import { SIGIN_ERROR } from "~/plugins/errors/errorSigIn";
import {  mapState } from 'vuex';


export default {

  components:{
  barTop,
  barBrand,
  bar,
  btnFloat,
  footerIndex,
  alertWarnning,


  },

  data(){
  return {
  renderWarnning:false,
  email:'',
  password:'',
  restext:'',
  isDisabled:false,

  }
  },

  beforeDestroy(){
  this.isDisabled,  this.renderWarnning ,   this.email ,  this.password ,  this.restext = null

  },
  
  computed:{
  ...mapState({
  ISLOGIN : state => state.profile.isLogin,

  }),
    formState : function (){

  if(this.email != ''){
  this.isDisabled = false

  }else {
  this.isDisabled = true

  }

  }

  },

  methods:{
 
  async createUser(){

  this.renderWarnning = false
  logins.createUserWithEmailAndPassword(this.email, this.password).then(() => {


  }).catch( (error)=>{
  this.renderWarnning = true
  
  this.sendError(error.code)

  })
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