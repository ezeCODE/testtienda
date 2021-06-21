<template>
<div class="container">

  <header class="header-main">
  <barTop />
  <barBrand />
  <bar />
  </header>


    <div>
    <div class="grid-product-container ">
    <p class="paragraph"> pasos para crear un producto </p>
    <div class="container-guide">
  
    <div class="guide-steps">
    <div>
    <label class="label-file"> Paso 1 ¿A QUE SESIÓN PERTENECE? </label>
    <p class="paragraphs">
    el producto que estas creado a que sesion de la tienda pertence.
    elije una.
    </p>
    </div>
    <div>

    <ul class="widgeth-ul">
    <li
    class="widgeth-li"
    v-for="(session, index) in sessions"
    :key="index"
    :class="{ 'widgeth-li-active': sessionActive == index }"
    @click="selectSession(index, session)"
    >
    {{ session }}
    </li>
    </ul>
    </div>
    </div>   

    <div class="guide-steps">
    <div>
    <label class="label-file">
    Paso 2 Título del producto
    </label>
    <p class="paragraphs"> 
     elige un título descriptivo a producto en cuestión. 
    </p>
    </div>
    <div class="col-item-2 algin-center" >
    <input type="text" placeholder="moneda romana" class="form-input" v-model="title" />
    </div>

    </div>   


    <div class="guide-steps">
    <div>
    <label class="label-file"> Paso 3 ¿ES NOVEDAD? </label> 
    <p class="paragraphs">
    Puedes destacar si el producto es nuevo en la tienda, o no, ayuda
    al susuario a identificar de manera muy fail cuando exsiste un
    producto nuevo.
    </p>
    </div>
    <div>
 
    <ul class="widgeth-ul">
    <li
    class="widgeth-li"
    v-for="(state, index) in newstate"
    :key="index"
    :class="{ 'widgeth-li-active': isNewsRes == index }"
    @click="selectState(index, state)"
    >
    {{ state }}
    </li>
    </ul>
    </div>
    </div>
    
    <div class="guide-steps">
    <div>
    <label class="label-file">
    Paso 4 Descripcion breve
    </label>
    <p class="paragraphs"> 
    Párrafo breve de las características del producto. No mostramos el párrafo completo en grilla de sesión, 
    pero si el producto es seleccionado, mostramos el párrafo completo. 
    </p>
    </div>
    <div class="col-item-2 algin-center">
    <i class="color-red"  v-if="disabledImage && inputImageState"> * </i>
    <textarea class="form-input" type="text" placeholder=" parrafo breve" rows="10" v-model="descr">
    </textarea>
    </div>

    </div>




    <div class="guide-steps">
    <div>
    <label class="label-file"> Paso 5 Elije una imagen</label>
    <p class="paragraphs">
    Elige una imagen acorde al producto. Esta imagen es el cover
    principal, que muestra el producto en cuestión.
    </p>
   </div>
   <div class="col-item-2 algin-center"> 
     
    <p class="paragraphs color-red cols-space-3 " v-if="disabledImage && inputImageState">  Utilizamos descripción y tag como identificador de la imagen </p>
    <div class="widget-file-image cols-3 bg-blue-item align-content-center">
    <label for="uploader" class="product-title cursor-pointer">
    Subir una imagen
    </label>
    <input
    id="uploader" 
    @change="beforeSend($event, 'fileImage')"
    class="input-file"
    type="file"
    
    />
    
    <img class="image-max-100px" :src="cover" alt="">
    </div>
 
    </div>
    </div>


    <div class="guide-steps">
    <div>
    <label class="label-file"> Paso 6 Precio del producto</label>
    <p class="paragraphs"> Escribe el precio del producto, no comas, si es
    1,600 (mil seicientos) quedaria en 1600.
    </p>
    </div>
    <div >
    <div >
    <div class="">
    <p class="paragraphs">$ precio</p>
    <input type="number" placeholder="35.50" class="form-input" v-model="price" />
    </div>
    </div>
    </div>
    </div>

    <div class="guide-steps">
    <div>
    <label class="label-file"> Listo </label>
    <p class="paragraphs">Si haz finalizado todos los pasos requeridos para publicar un producto, 
      dale al boton verde de crear producto. 
    </p>
    </div>
    <div >
    <button class="button-send"
    :disabled="isdisabled"
    @click="createProduct()"
    
    >
    <span class="icons icon-plus-round"></span> Listo, crear producto
    </button>
    </div>
    
    </div>

    <div class="guide-steps">
    <p></p>
    <alertSucces v-if="SUCCESS2221"
    title="Producto creado"
    paragraph="está disponible en la grilla correspondiente a su sesión, además en nuestros buscadores"

    />
    </div>

    <div class="guide-steps">
    <p></p>
    <alertWarning v-if="WARNING2221"
    title="ERROR algo sucedio, vuelva a intentar"
    paragraph=""

    />
    </div>

    </div>
    </div>

    <btnFloat />
    <footerIndex />
    
    <div v-if="LOADER">
    <modalloader />
    </div>

 
    {{ buttonCreate }}
    {{ formImage }}

  </div>

</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import barBrand from "~/components/headers/brand";
import bar from "~/components/headers/bar";
import btnFloat from "~/components/buttons/buttonFloat";
import modalloader from "~/components/modals/modalloader";
import alertSucces from "~/components/alerts/succes";
import alertWarning from "~/components/alerts/warning";

import { mapActions, mapMutations, mapState } from "vuex";


export default {

  components:{
  barTop,
  barBrand,
  bar,
  btnFloat, 
  modalloader,
  alertSucces,
  alertWarning

  },

  data() {
  return {
 
  fileImage : undefined,
  imgdataname: '',
 
  sessions: [ 'Joyas', 'Muebles', 'documentos', 'cuadros',  'arteydeco', 'automobiles' , 'ropaTv' ], 
  
  sessionSend: "",
  newstate: ["Si", "No"],
  
  sessionActive: undefined,
  isNewsRes: undefined,
  isSelected: undefined,
  isnew: undefined,
  descr: "",
 
  cover: "https://firebasestorage.googleapis.com/v0/b/tiendaalimentos.appspot.com/o/src%2Fimagedefualt%20(1).jpg?alt=media&token=30978f5c-b7c0-41b5-8a41-041159eb999a",
  inputImageState : false,   
  title: '',
  price:  parseInt(0),
  isdisabled: false,
  disabled: false,
  disabledImage: false,
  
  }
  },

  beforeDestroy() {
  this.title, this.imgdataname, this.fileImage,  this.sessions, this.sessionSend, this.inputImageState, 
  this.newstate, this.sessionActive = null;
  this.isNewsRes, this.isSelected,  this.isnew, this.descr = null;
  this.cover,  this.price, this-isdisabled, this.disabled , this.disabledImage = null;
  this.statesuccess2021off()

  },

  computed:{
 
  ...mapState({
  ISLOGIN : state => state.profile.islogin,
  OBJECTID : state => state.profile.objectID,
  SUCCESS2221 : state => state.alerts.success2221,
  WARNING2221 : state => state.alerts.warning2221,
  LOADER : state => state.profile.loader,
   
  }),

  formImage : function(){

  if(this.descr != '' && this.tag !=''){
 
  this.disabledImage = false

  }else {
  
  this.disabledImage = true
  }
  },
  

  buttonCreate: async function () {
  if (
  (this.sessionSend != "") &
  (this.isnew != undefined) &
  (this.descr != "Descipcion breve") &
  (this.tag != "") &
  (this.price > 0) 
  ) {

  this.isdisabled = false;
  } else {

  this.isdisabled = true;
  }
  }

  },

  methods:{
    ...mapActions({
  uploaderImages : 'data/uploaderImages',
  uploadNewProduct : 'data/uploadNewProduct',
  searchImages: 'images/searchImages', 

  }),

  ...mapMutations({
  loaderOn : 'profile/loaderOn',
  loaderOff : 'profile/loaderOff',
  clearImageUrl : 'data/clearImageUrl',
  modalRightState : 'frontend/modalRightState',
  statesuccess2021on : 'alerts/statesuccess2021on',
  statesuccess2021off : 'alerts/statesuccess2021off'
     
  }),

 async beforeSend( e ,  typeUpload ) {
 
  if( typeUpload == 'fileImage' && e.target.files[0] != undefined ){

  const file = e.target.files[0];
 this.fileImage = e.target.files[0];

  this.inputImageState = true
  this.cover = URL.createObjectURL(file);
  
  this.imgdataname = e.target.files[0].name

  }

  if(typeUpload =='urlImage' ){
  this.modalRightState()

  }

  },
 
  async uploaderImagesCover (){

  this.loaderOn()

  setTimeout(() => {

  let obj = {
  imagename:  this.imgdataname, 
  fileImage:  this.fileImage, 


  }

  this.uploaderImages(obj).then(( ) => { 

  this.inputImageState = true
  this.loaderOff()

  })

  }, 2000);

 

  },

  async createProduct() {

  this.loaderOn()
  let moment = new Date().getTime();
  let createId = Math.random().toString(36).slice(2);
 

  let obj = {
  when : moment,
  title: this.title,
  descr: this.descr,
  isnew: this.isnew,
  docId: createId,
  session: this.sessionSend,
  price: parseInt(this.price),
  imagename:  this.imgdataname, 
  fileImage:  this.fileImage, 
  }

 
  this.uploaderImages(obj).then(( ) => {

  this.sessionActive = undefined
  this.isNewsRes = undefined
  this.isSelected = undefined
  this.isnew = undefined
  this.title = ""
  this.descr = ""
  this.descr = ""
  this.cover = "https://firebasestorage.googleapis.com/v0/b/tiendaalimentos.appspot.com/o/src%2Fimagedefualt%20(1).jpg?alt=media&token=30978f5c-b7c0-41b5-8a41-041159eb999a"
  this.price =  parseInt(0)
  this.inputImageState = false

  }) 

 

  

  },

  selectSession(index, session) {

  this.sessionActive = index
  this.sessionSend = session
 
  },



  selectState( i, state ) {

  if (state == "Si") {
  this.isnew = true;
  this.isNewsRes = false;

  } else {
  this.isnew = false;
  this.isNewsRes = true;
  }
  }


  }

 


}
</script>