<template>
<div class="container">

    <header class="header-main">
    <barTop />
    <barBrand />
    <bar />
    </header>

    <div class="padding-4-0  grid cols-2  grid-product-50 margin-center vertical-start">
 
    <alertWarning 
    v-if="isdata"
    title=" ... "
    paragraph = " No se encontraron productos en esta sesión "
    />

    <div>
  
    <h1 class="title-h1  "> {{ title }} </h1>
    <div class="product-box ">
    <div class="product-box-header">
    <img class="product-cover" lazy="loading" v-if="cover"  :src="cover" :alt="tag">
    <img class="product-cover" lazy="loading" v-else src="https://firebasestorage.googleapis.com/v0/b/tiendaalimentos.appspot.com/o/src%2Fimagedefualt%20(1).jpg?alt=media&token=30978f5c-b7c0-41b5-8a41-041159eb999a" alt="product">
    <label class="product-new" v-if="isnew">  novedad </label>
    <label class="product-off font-bold 'product-off-active" v-if="off" >   OFF AHORRA</label>
    </div>
    </div>
    </div>

    <div>

    <div class="product-box">
    <p class="product-desc"> {{ descr }}  </p>
    <div class="product-box-action">
    <div class="product-box-action-car" >
    <label class="product-price not-wrap "> $ {{  price }}  </label>
    </div>

    <label v-if="ISLOGIN"  class="product-add-fav" title="Agregar a favorito" > <span class="icon-add-fav icon-heart"></span>   </label>
    <label v-else  class="product-add-fav" title="Quitar de favorito" > <span class="icon-add-fav icon-heart"></span>   </label>
    </div>

    <div v-if="OBJECTID == '4pz7ElFFC9OYVspahDREaVm7n2L2' ">
    <n-link class="links"  :to="`/producto/updateItem/${idproduct}`"> editar publicacion </n-link>
    </div>
    
    <div v-else>
    <div class="product-box-action">
    <div class="form-main-input x-2">
    <h3 class="title-h3"> yo ofresco! <strong v-if="offers" > us$  {{ offers }} </strong> </h3>
    <input v-model="offers" class="form-input" type="number"  required >
    <div v-if="ISLOGIN">  
    <button :disabled="isDisabled" class="product-btn-add" @click="prepareOffer(idproduct)">  enviar </button>
    </div>
    <div v-else>  
    <n-link to="/Login/ingresar" class="paragraphs-res"> ingresa y OFERTA! </n-link> 
    </div>
  
    <alertSucces v-if="SUCCESS222"
    title="LISTO!!!"
    paragraph="espera el momento, y mira si ganaste"

    />

    <alertWrnning v-if="WARNING222"
    title=""
    paragraph="algo ocuerio vuelva a intentar"
    />
  
  
    </div>
    </div>


    </div>
    </div>

    <h1 class="sub-title"> Compartir </h1>
  
    <socialsharing 
    :idUrl="url"
    :title="`en venta ${title}  ${descr}`"
    quote = "EFtienda"
    hashtags = "tienda mayorista"

    />

    </div>
    </div>

    <btnFloat />
<footerIndex />

 {{formState}}
 
</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import barBrand from "~/components/headers/brand";
import bar from "~/components/headers/bar";
import btnFloat from "~/components/buttons/buttonFloat";
import footerIndex from "~/components/footerIndex";
import socialsharing from "~/components/shared";
import alertSucces from "~/components/alerts/succes";
import alertWarning from "~/components/alerts/warning";
 
import { db } from "../../plugins/firebase/database";

import { mapActions, mapMutations, mapState } from "vuex";
 

export default {

  components:{
  barTop,
  barBrand,
  bar,
  btnFloat,
  alertWarning,
  footerIndex,
  socialsharing,
  alertSucces
   

  },


    data(){
    return {
    offers : 0,
    isDisabled : false

    }
    },

    beforeDestroy(){
    this.offers, this.isDisabled  = null
    this.renderSuccess222(false)
    this.renderWarnning222(false)
    },

 
    computed: {
    ...mapState({
    ISLOGIN: state => state.profile.isLogin,
    OBJECTID : state => state.profile.objectID,
    SUCCESS222 : state => state.alerts.success222,
    WARNING222 : state => state.alerts.warning222

    }),

    formState : function (){

    if(this.offers.length > 0){
    this.isDisabled = false

    }else {
    this.isDisabled = true

    }

    }

    },

  

  async asyncData ({ route }){
 
  let isdata = false
  let dataProduct = []
  let idproduct =  await route.params.id
  let url = `https://tiendaantiguedades.herokuapp.com/producto/${idproduct}`
  let isnew = Boolean
  let off = Boolean
  let cover = String
  let price = Number
  let pack = Number
  let descr = String
  let tag = String
  let title = String
 
  let docId = String
 
  let refProduct = db.collection('products').doc(idproduct)
 
  await refProduct.get().then( async ( doc ) => {
 
  dataProduct = doc.data()
  isnew  = await doc.data().isnew
  off  = await doc.data().off
  cover  = await doc.data().cover
  price = await doc.data().price
  descr = await doc.data().descr
  tag = await  doc.data().tag
  title = await  doc.data().title
 
 
  }).catch((err) => {  console.log(err) });

  return {
  idproduct : idproduct,
  dataProduct:dataProduct,
  cover: cover,
  isnew : isnew,
  off : off,
  price : price,
  pack : pack,
  descr : descr,
  tag : tag,
  docId : docId,
  url : url,
  title : title,
  isdata,

  }
  },

  methods:{
    ...mapActions({
    sendOffer : 'profile/sendOffer'

    }),
    ...mapMutations({
    renderSuccess222 : 'alerts/renderSuccess222',
    renderWarnning222 : 'alerts/renderWarnning222'

    }),


    prepareOffer( idproduct ){

    this.renderSuccess222(false)

    let moment = new Date().getTime()
    let createId = Math.random().toString(35).slice(2);

    let obj = {
        idproduct : idproduct,
        docId : createId,
        price : parseInt(this.offers),
        when : moment,
        objectId : this.OBJECTID
    }

    
    this.sendOffer(obj).then(() => {
        this.offers= 0
    })
  

    }
  },


 head(){
  return {
  meta:[
  {
  hid: 'twitter:title',
  name: 'twitter:title',
  content: `compra ahora pack de ${ this.pack}`
  },
  {
  hid: 'twitter:description',
  name: 'twitter:description',
  content: this.descr
  },
  {
  hid: 'twitter:image',
  name: 'twitter:image',
  content: this.cover
  },
  {
  hid: 'twitter:image:alt',
  name: 'twitter:image:alt',
  content: this.pack
  },
  {
  hid: 'og:title',
  property: 'og:title',
  content: `compra ahora  pack de ${ this.pack}`
  },
  {
  hid: 'og:description',
  property: 'og:description',
  content: this.descr
  },
  {
  hid: 'og:image',
  property: 'og:image',
  content: this.cover
  },
  {
  hid: 'og:image:secure_url',
  property: 'og:image:secure_url',
  content: this.cover
  },
  {
  hid: 'og:image:alt',
  property: 'og:image:alt',
  content: `compra ahora  pack de ${ this.pack}`
  }

  ]
  }
  },
 

}
</script>