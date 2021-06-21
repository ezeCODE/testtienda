<template>
  <div class="grid-product-container grid-product-x5 grid-product bg-blue-ligth">
    <div class="product-box bg-white" v-for="(product, index) in listSession" :key="index">
     
    <div class="product-box-header">
    <img class="product-cover" lazy="loading" v-if="product.cover"  :src="product.cover" :alt="product.tag">
    <img class="product-cover" lazy="loading" v-else src="https://firebasestorage.googleapis.com/v0/b/tiendaalimentos.appspot.com/o/src%2Fimagedefualt%20(1).jpg?alt=media&token=30978f5c-b7c0-41b5-8a41-041159eb999a" alt="product">
    <label class="product-new" v-if="product.isnew">  novedad </label>
  
    <label class="product-title"> {{  product.title }}  </label> 
    <p class="product-desc text-limit "> {{ product.descr }}  </p>
    </div>
   
    <div class="product-box-action">
    <div class="product-box-action-car" >
    <label class="product-price font-bold"> $ {{  product.price }}  </label>
    </div>

    <label v-if="true" @click="addFavorite( product.docId )" class="product-add-fav" title="Agregar a favorito" > <span class="icon-add-fav icon-heart"></span>   </label>
    <label v-else  class="product-add-fav" title="Quitar de favorito" > <span class="icon-add-fav icon-heart"></span>   </label>
    
    </div>
    <div class="grid cols-2 vertical-center padding-1-0 bg-silver justify-items-center">
    <label class="paragraphs-res"> <span class="icons icon-ticket"></span> OFERTAR!!! </label>
    <n-link class="links color-bluedark max-content  text-center position-rigth" 
    :to="`/producto/${product.docId}`"> ver </n-link>
    </div>
    <n-link 
    v-if="OBJECTID == '4pz7ElFFC9OYVspahDREaVm7n2L2' " class="links" 
    :to="`/producto/updateItem/${product.docId}`" > editar este producto </n-link>
    </div>
  </div>
</template>

<script>
import { db } from "../plugins/firebase/database";
import { mapState } from 'vuex';

export default {

}
</script>
<style>

</style>