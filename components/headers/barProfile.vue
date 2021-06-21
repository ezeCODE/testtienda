<template>
 <div class="bar-profile">
  <ul class="bar-profile-ul">
  <li class="bar-profile-li"> <n-link class="bar-profile-link" to="/Perfil/"> <span class="icon-bar-profile icon-comment"></span> chat </n-link> </li>
  <li class="bar-profile-li"> <n-link class="bar-profile-link" to="/Perfil/"> <span class="icon-bar-profile icon-cart-shopping-1"></span> mi carrito </n-link> </li>
  <li class="bar-profile-li"> <n-link class="bar-profile-link" to="/Perfil/"> <span class="icon-bar-profile icon-heart"></span>  lista favoritos  </n-link></li>
  <li class="bar-profile-li"> <n-link class="bar-profile-link" to="/Perfil/"> <span class="icon-bar-profile icon-ticket-1"></span>  mis facturas </n-link> </li>
  <li class="bar-profile-li"> <n-link class="bar-profile-link" to="/Perfil/"> <span class="icon-bar-profile icon-ticket-1"></span>  mis compras </n-link> </li>

  <li class="bar-profile-li max-content " @click="closeOut()"> <span class="icon-lock-secure-1"></span> cerrar sesion   </li>
  
  </ul>
</div>
</template>

<script>
import { logins } from "~/plugins/firebase/database";
 
export default {


  methods:{

  closeOut(){
 
  logins.signOut().then(function() {
  window.location.replace("/")
  }).catch(function(error) {
  alert(error)
  });

  },
  }


}
</script>
 