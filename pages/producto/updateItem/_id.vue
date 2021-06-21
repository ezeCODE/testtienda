<template>
<div class="container">

  <header class="header-main">
  <barTop />
  <bar />
  </header>

 
  <div  class="header-action bg-session-pay"> 
  <ul class="normal-ul" v-for="(data, index) in ONEPRODUCTDATA" :key="index+'plus'">
  <div class="question-box-card-header">
  
  <p class="paragraphs"> Actualizar este producto  </p>

  <p class="paragraphs"> <img class="image-max-250px" 
  :src="data.cover" v-if="data.cover" lazy="loading" alt="product"  />   </p>
  <hr>
  </div>
  <div class="question-box-card-header padding-1-0 gap-2 algin-center">
  
  <div> <button class="button-mini" @click="updateProduct('isnew' , true )"> si, novedad </button>
  <button class="button-mini" @click="updateProduct('isnew' , false )"> no </button> </div>
  <p class="paragraphs"> <p class="paragraphs" v-if="data.isnew" > si, novedad  </p> <p class="paragraphs" v-else> no novedad </p>   
  <hr>
  </div>
 
   <div class="question-box-card-header padding-1-0 gap-2">
  <div>
  <textarea class="form-input" type="text" placeholder="breve descripción" v-model="descr"  rows="10"></textarea>
  <button class="button-mini" @click="updateProduct('descr' , descr)"> actualizar </button> 
  </div>
  <p class="paragraphs position-right padding-1-0"> <strong>descripcion</strong> {{ data.descr }}  </p>
  <hr>
  </div>
  <div class="question-box-card-header padding-1-0 gap-2">
  <div>
  <input class="form-input" type="text" placeholder="titlulo principal" v-model="title" >
  <button class="button-mini" @click="updateProduct('title' , title)"> actualizar </button> 
  </div>
  <p class="paragraphs position-right"> <strong> eqtiquetas </strong> {{ data.title }}  </p>
  <hr>
  </div>

  <div class="question-box-card-header padding-1-0 gap-2">
  <div> 
  <input class="form-input" type="number" v-model="price" >
   <button class="button-mini"  @click="updateProduct('price' , parseInt(price))"> nuevo precio </button> 
  </div>
  <p class="paragraphs position-right"> <strong> precio</strong> $ {{ data.price }}   </p>
  <hr>
  </div>
 
  </ul>
  
  <alertWarning 
  v-if="warning"
  title="ERROR algo sucedio, vuelva a intentar"
  paragraph=""

  />  
  
  </div>

  <div>
  <btnFloat />
 
  <footerIndex />
 
  </div>
</div>
</template>
<script>
import barTop from "~/components/headers/barTop";
import bar from "~/components/headers/bar";
import btnFloat from "~/components/buttons/buttonFloat";
import footerIndex from "~/components/footerIndex";
import alertWarning from "~/components/alerts/warning";

import { mapActions, mapState } from "vuex";

export default {

  components: {
  barTop,
  bar,
  btnFloat,
  footerIndex,
  alertWarning

  },

  data() {
  return {
  warning : false,
  idProduct: this.$route.params.id,
  descr: "",
  title: "",
  price:  parseInt(0),
 

  }
  },

  beforeDestroy() {
  this.productData, this.title, this.warning,  this.descr = null;
  this.price = null;

  },

  computed: {
  ...mapState({
  ONEPRODUCTDATA : state => state.data.oneProductData
  
  })
  },

  created(){

  this.dataProduct(this.idProduct).then(() => {


  }).catch( err=> this.warning = true )
  },
  

  methods: {
  ...mapActions({
  dataProduct: 'data/dataProduct',
  dataProductUpdate: 'data/dataProductUpdate',

  }),
 
 
  async updateProduct( fiield, data ) {
  
  let obj = {
  [`${fiield}` ] : data
 
  }

  let idDoc = {
    idProduct : this.idProduct
  }

  let res = Object.assign(obj, idDoc)
  
  this.dataProductUpdate({obj : res }).then(() => {
  
  this.descr =  ""
  this.title =  ""
  this.price =  parseInt(0)


  }).catch( err=> this.warning = true )

  },

  },
  }
</script>
<style lang="scss">

 .container-guide{
   position: relative ; height: max-content; display: grid;
   grid-template-columns: repeat(1, 1fr);
   gap: 2em;

 }

</style>