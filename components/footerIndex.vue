<template>
<footer>

<div class="footer-items"> 

    <ul class="footer-ul">
    <li >
    <label class="brand-label-search">  Buscar productos </label>
    </li>
    </ul>

  <hr>

    <ul class="footer-ul" v-if="ISLOGIN" >

    <li class="footer-li"> Mis compras </li>
    <li class="footer-li"> <n-link class="footer--link" to="/Perfil/"> ir a perfil  </n-link></li>
    <li class="footer-li"> <n-link class="footer--link" to="/Perfil/"> ir a carito  </n-link></li>
    <li class="footer-li"> <n-link class="footer--link" to="/Perfil/"> Mis favoritos  </n-link></li>
    </ul>

    <ul class="footer-ul" v-else>
    <li class="footer-li"> Tu cuenta, es gratis </li>
    <li class="footer-li"> <n-link class="footer--link" to="/Login/ingresar"> Ingresar  </n-link> </li>
    <li class="footer-li"> <n-link class="footer--link" to="/Login/crearCuenta"> ¿No tiene cuenta?  </n-link> </li>
    <li class="footer-li"> <n-link class="footer--link" to="/"> Beneficios  </n-link> </li>
    </ul>
 

    <ul class="footer-ul">
    <li class="footer-li"> Categorias </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> Joyas </n-link> </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> muebles </n-link>  </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> documentos </n-link>  </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> cuadros </n-link>  </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> arte y deco </n-link>  </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> automobiles </n-link>  </li>
    <li class="footer-li">  <n-link class="footer--link" to="/"> ropa y tv </n-link>  </li>
    </ul>

    <ul class="footer-ul">
    <li class="footer-li"> Contacto </li>
    <li class="footer-li">  <n-link class="footer--link" to="/">  <span class="icon-footer icon icon-email-envelope"></span> Contacto </n-link>  </li>
    <li class="footer-li">  <span class="icon-footer icon-iphone"></span> 1222 2332 </li>
    <li class="footer-li">  <span class="icon-footer icon-social-whatsapp"></span> 1222 2332 </li>
    <li class="footer-li">  <span class="icon-footer icon-map-marker"></span> <n-link to="/"  class="footer--link"> Nuestras tiendas </n-link> </li>
   
    </ul>

    <ul class="footer-ul">
    <li class="footer-li"> Informacion </li>
    <li class="footer-li"> <n-link class="footer--link" to="/"> <span class="icon-footer icon-help"></span> Preguntas frecuentes </n-link> </li>
    <li class="footer-li"> <n-link class="footer--link" to="/"> <span class="icon-footer icon-legal"></span> Términos Y Condiciones </n-link>  </li>
    <li class="footer-li"> <span class="icon-footer icon-legal"></span> Legal </li>
    </ul>


<ul class="footer-ul">

   <h2 class="footer-h2-title"> Pague con </h2>
  <div class="grid-cards-horizontal">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/amex2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/argencard2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/banelco2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/cabal2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/cencosud2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/diners2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/mastercard2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/mercadopago2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/nativa2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/pagofacil2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/rapipago2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/tarjeta-naranja2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/tarjeta-shopping2x.png" alt="cards">
  <img class="grid-cards-icons" lazy="loading" src="@/assets/cards/visa2x.png" alt="cards">
  </div>
  
</ul>
<hr> 

    <div class="box-cpyright">
    <p class="paragraphs color-white"> Derechos reservados {{dat}}  </p>
    </div>

</div>

<div class="footer-data"></div>

  </footer>
</template>
<script>
import { mapState } from "vuex";

export default {

    data(){
    return{
    dat: ''
    }
    },

    computed:{
    ...mapState({
    ISLOGIN : state => state.profile.isLogin,

    })
    },

    mounted(){
    this.fecha()
    },

    methods:{
    fecha (){

    this.dat =  new Date().getFullYear()

    }
    }


}
</script>
 