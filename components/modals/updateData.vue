<template>
<div class="modal" v-if="MODALUPDATEDATA">

  <div class="modal-body">
  <div class="modal-context">
      
  <div class="form-main">

   <div class="form-main-input  x-12">
    <label class="form-label" for="nombre"> nombre personal {{ USERPROFILE.personalName }} </label>
    <input id="nombre" v-model="newprofilename" class="form-input" type="text" placeholder="jhon doe"  autocomplete="off" required >
    
    </div> 
    
    <div class="form-main-input  x-12">
    <label class="form-label" for="telefono"> telefono / whatsapp {{USERPROFILE.personaCellphone  }} </label>
    <input id="telefono" v-model="newprofilecellphone" class="form-input" type="text" placeholder="444 555"  autocomplete="off" required >
    
    </div>

      
    <div class="form-main-input  x-12">
    <label class="form-label" for="telefonoarea"> area / prefijo  {{USERPROFILE.personaCellphoneArea  }} </label>
    <input id="telefonoarea" v-model="newprofilecellphoneArea" class="form-input" type="text" placeholder="0022 "  autocomplete="off" required >
    
    </div>

    <button class="chat-btn-send" @click="profileUpdate()"  >  actualizar  </button>

    <div class="form-main-input  x-12"  > 
    <alertWarning v-if="alertWarning"
    title="algo a sucedido"
    paragraph = "Volver a intentar"
    
    />
    </div>

    <div class="form-main-input  x-12"  > 
     <p class="paragraphs">
     despues de darle al boton actualizar, Actualiza la pagina para obtener los cambio.
      
    </p>
    </div>
    </div>
    </div>

    <label class="modal-close" @click="modalUserData()"> <span class="icon-close"></span> </label>
    </div>

  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

import alertWarning from "~/components/alerts/warning";

export default {
 
  data(){
  return {
  alertWarning:false,
  newprofilename: '',
  newprofilecellphone: '',
  newprofilecellphoneArea: '',
  newzipcode:'',

  }
  },

  beforeDestroy(){
    this.alertWarning, this-this.newprofilename, this.newprofilecellphone, this.newprofilecellphoneArea, this.newzipcode = null
  
  },

  components:{
  alertWarning

  },

  computed:{
  ...mapState({
  OBJECTID : state => state.profile.objectID,
  USERPROFILE : state => state.profile.userProfile,
  MODALUPDATEDATA : state => state.frontend.modalUpdateData,
  
  })
  },

  mounted(){
    this.formDataStore()
  
  }
  ,


  methods:{
    ...mapMutations({
    modalUserData : 'frontend/updateUserData',
    profilesuccess : 'profile/profilesuccess',
    profileswarning : 'profile/profileswarning',

    }),
  
    formDataStore(){

    this.newprofilename = this.USERPROFILE.personalName
    this.newprofilecellphone = this.USERPROFILE.personaCellphone
    this.newprofilecellphoneArea =  this.USERPROFILE.personaCellphoneArea 
   
  
    },

    profileUpdate(w) { 

    let obj = { 
    personalName : this.newprofilename,
    personaCellphone : this.newprofilecellphone,
    personaCellphoneArea :this.newprofilecellphoneArea,
    objectID:  this.OBJECTID

    }

  
    
    }

  }

}
</script>