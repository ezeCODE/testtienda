<template>
<div class="container bg-white">

  <header class="header-main">
  <barTop />
  <barBrand />
  <bar />

  </header>

 <barProfile />


  <div class="grid cols-2 vertical-start">
  <div class="padding-1-tablet "> 
  <div class="card-profile mt-auto ">
  <p class="paragraphs">
  Datos de tu cuenta, en nuestra plataforma. Tus datos son privados y así los mantenemos.
  Deseamos que  te sea útil nuestra plataforma y mejore tu actividad laboral.
  Puedes ver nuestros productos todos los días, las 24 horas, activa las notificaciones,
  para enterarte de novedades de productos y ofertas. <br> 
  Desde aquí puedes comprar y pagar ..
  </p>

  <div class="padding-2-0"> 
  <img class="img-defualt border-1" src="@/assets/img/ecommerce-2607114_960_720.webp" alt="cover">
 
  </div>
  </div>
  </div>

  <div class="card-profile">
    
  <div  v-if="UPDATEPROFILESUCCESS">
  <alertSuccess
  title="Datos actualizados"
  paragraph="Recargue la página para ver los cambios "
  /> 
  
  </div>
  <div  v-if="UPDATEPROFILESWARNING">
  <alertWarning 
  title="Fallo la actualización"
  paragraph='Vuelva a intentar por favor'
  />
  </div>

 
  <img class="card-cover" lazy="loading" src="@/assets/icons/iconfinder_thefreeforty_shop_1243706 (1).png" alt="profile">
    <label class="question-label"> Hola {{ USERPROFILE.personalName }}  </label>
 
  <div class="question-box dual-box-cols">
 
  <label class="question-chat">  Nombre </label>
  <p class="paragraphs">
  {{ USERPROFILE.personalName }}
  </p> 
  
  <label class="question-chat ">  Telefono de contacto </label>
  <p class="paragraphs">
  {{ USERPROFILE.personalCellphoneArea }} {{ USERPROFILE.personalCellphone }}
  </p>

  <button class="card-btn-small"  :taskUpdate="updateTrue"> <span class="icon-pencil"></span> Actualizar datos personales </button>
  </div>
  <alertWarning v-if=" USERPROFILE.personalName == undefined "
  title="Por favor"
  paragraph="Completa tus datos de envíos, para utilizar el chat y poder hacer tus compras"
  />


  <p class="question-label"> Datos del comercio </p>

  <div v-if="UPDATESTORESSUCCESS">
  <alertSuccess
  title="Datos del comercio actualizados"
  paragraph="Recargue la página para ver los cambios"
  /> 
  </div>
 
  <div v-if="UPDATEPSTOREWARNING">
  <alertWarning 
  title="Fallo la actualizacion"
  paragraph='vuelva a intentar por favor'
  />
  </div>

  <div class="question-box dual-box-cols">

  <label class="question-chat">  Nombre del comercio  </label>
  <p class="paragraphs">
  {{ USERPROFILESTORE.storeName }}
  </p>

  <label class="question-chat ">  Cuit / Cuil  </label>
  <p class="paragraphs">
   {{USERPROFILESTORE.storeCuitCuilt  }}
  </p>

  <label class="question-chat"> Hubicado en   </label>
  <p class="paragraphs">
  {{USERPROFILESTORE.storeStreetName}}
  </p>

  <label class="question-chat"> Numero   </label>
  <p class="paragraphs">
   {{USERPROFILESTORE.storeStreetNum}}
  </p>

  <label class="question-chat"> Calle lateral   </label>
  <p class="paragraphs">
    {{USERPROFILESTORE.storeStreet2}}
  </p>

  <div v-if="USERPROFILESTORE.floor">
  <label class="question-chat"> Piso  </label>
  <p class="paragraphs">
  {{USERPROFILESTORE.floor}}
  </p> 

  </div>  
  

  <label class="question-chat"> tienda telefono area </label>
  <p class="paragraphs">
  {{USERPROFILESTORE.storeAreaCellphone}}
  </p>  

  <label class="question-chat"> tienda telefono  </label>
  <p class="paragraphs">
  {{USERPROFILESTORE.storeCellphone}}
  </p> 

  <label class="question-chat"> codigo postal  </label>
  <p class="paragraphs">
  {{USERPROFILESTORE.zipcode}}
  </p> 
 
  
  <div v-if="USERPROFILESTORE.apartment">
  <label class="question-chat"> Departamento  </label>
  <p class="paragraphs">
  {{ USERPROFILESTORE.apartment}}
  </p> 
  </div>
  
   <label class="question-chat "> en la ciudad de </label>
  <p class="paragraphs">
  {{ USERPROFILESTORE.city }}
  </p>  
  
  <label class="question-chat"> Estado, provincia </label>
  <p class="paragraphs">
  {{ USERPROFILESTORE.stateName }}
  </p>

   <label class="question-chat"> Pais   </label>
  <p class="paragraphs">
    {{USERPROFILESTORE.countryName}}
  </p>

  
  <button class="card-btn-small"  > <span class="icon-pencil"></span> Actualizar estos datos  </button>
  </div>
  
  <div class="question-box"> 
  <div  v-if="!EMAILVERIFIED">
  <alertWarning 
  title="VERIFICA TU EMAIL"
  :paragraph="resparagraph"
  /> 
  <button class="card-btn-small" @click="checkStatusEmail()"> Verificar ahora </button>
  </div>
  <div v-else>
    <alertSuccess 
     title="🥉 EMAIL VERIFICADO"
     paragraph=''
    />
  </div>

  <alertWarning v-if="alertWarning"
  title="algo a sucedido"
  :paragraph="resparagraph"
  />
 
  <alertSuccess v-if="alertSucces"
  title="Link enviado!"
  paragraph="Mira tu email, en notificaciones o spam."
  /> 
  </div>

  </div>
 {{formEmail}}
</div>


  <btnFloat />
<footerIndex />

</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import barBrand from "~/components/headers/brand";
import bar from "~/components/headers/bar";
import barProfile from "~/components/headers/barProfile";
import btnFloat from "~/components/buttons/buttonFloat";
import alertSuccess from "~/components/alerts/succes";
import alertWarning from "~/components/alerts/warning";
import footerIndex from "~/components/footerIndex";

import { logins } from "~/plugins/firebase/database";
import { mapState, mapActions } from "vuex";

export default {

    components:{
    barTop,
    barBrand,
    bar,
    barProfile,
    btnFloat,
    alertSuccess,
    alertWarning,
    footerIndex
  },

  data(){
     
  return {
  boxEmail:false,
  boxPassword:false,
  isDisabled:false,
  updateTrue:false,
  alertSucces:false,
  updateSuccess:false,
  alertWarning:false,
  newemailprofile:'',
  resparagraph:''

  }
  },

  computed:{
  ...mapState({
  USERPROFILE : state => state.profile.userProfile,
  USERPROFILESTORE : state => state.profile.userProfileStore,
  OBJECTID : state => state.profile.objectID,
  EMAILVERIFIED : state => state.profile.emailVerified,
  RESNEWEMAIL : state => state.profile.resNewEmail,

  UPDATESTORESSUCCESS : state => state.profile.updateStoresSuccess,
  UPDATEPSTOREWARNING : state => state.profile.updatepStoreWarning,
  UPDATEPROFILESUCCESS : state => state.profile.UPDATEPROFILESUCCESS,
  UPDATEPROFILESWARNING : state => state.profile.updateProfilesWarning,

  formEmail: function(){

  if(this.newemailprofile != ''){

  this.isDisabled = false

  }else {

  this.isDisabled = true
  }

  },
  })
  },

    mounted(){

    this.chekingProfile()

    },

    methods:{
    ...mapActions({
    chekingProfile : 'profile/checkProfile',
    account : 'profile/checkAccount',

    }),
 

    checkStatusEmail(){

    let self =  this
    let user = logins.currentUser
    user.sendEmailVerification().then(function() {
    self.alertSucces = true
    }).catch(function(error) { 

    self.alertWarning = true

    setTimeout(() => {
    self.alertWarning = false

    }, 5000);
    })

    },


    resetPassword(){

    this.alertSucces = false
    let self=this
    logins.sendPasswordResetEmail(`${this.PROFILEEMAIL}`).then(function() {

    self.alertSucces = true

    }).catch(function(error) {
    self.alertWarning = true

    setTimeout(() => {
    self.alertWarning = false

    }, 5000);
    });

    }

    }

}
</script>