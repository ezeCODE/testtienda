<template>
<div class="bar-bottom">
  <ul class="bar-bottom-ul">
    <li class="bar-bottom-li" >  <n-link class="bar-bottom-link" to="/"> <span class="cursor-pointer icons bar-icon-home-2 icon-home-2"></span> </n-link>    </li>
    <li class="bar-bottom-li" v-if="!ISLOGIN">   <n-link class="bar-bottom-link" to="/Login/ingresar"> <span class="cursor-pointer icons icon-user-close"> </span>  </n-link>  </li>
  
    <li class="bar-bottom-li" v-else > <n-link class="bar-bottom-link" to="/Perfil/carrito"> <span class="cursor-pointer icons bar-icon-cart-shopping-1 icon-cart-shopping-1"   > </span>   </n-link> </li>
    <li class="bar-bottom-li" v-if="ISLOGIN" > <n-link class="bar-bottom-link" to="/Perfil/Preguntas"> <span class="cursor-pointer icons bar-icon-comment icon-comment"   > </span>   </n-link> </li>
    
    <li class="bar-bottom-li" v-if="ISLOGIN"> <n-link class="bar-bottom-link" to="/Perfil/favorito"> <span class="cursor-pointer bar-icon-heart icons icon-heart"></span>  </n-link> </li>
    <li class="bar-bottom-li" @click="InfoState()"> <span class="icons icon-ios-information bar-icon-ios-information"></span>  </li>
  </ul>
</div> 
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {

  computed:{
  ...mapState({
  ISLOGIN : state => state.profile.isLogin,
 
  })
  },

  methods:{
  ...mapMutations({
  InfoState : 'frontend/infoMobileState'
  
  })
  }

}
</script>
<style lang="scss">
@import "~/assets/styles/_screen";

.bar-bottom{ position: fixed; width: 100%;  bottom: 0em; background: black; z-index: 9000;
  box-sizing: border-box; padding: 1em 0em; max-width: 1600px;

}

.bar-bottom-ul{ display: grid; grid-template-columns: repeat(5, 1fr);
  justify-content: space-around; justify-items: center; align-content: center;
    @include tablet { width: 50%; margin: auto; }
}

.bar-bottom-li, .bar-bottom-link{ color: white; font-size: .8em;
  text-decoration: none; font-family: 'Poppins', sans-serif; text-align: center;
  @include tablet { font-size: .8em; }
 // @include tablet { font-size: 1em; }

}

.add-items-favorites { animation: addFav 5s  infinite ease-in-out;
 
  @keyframes addFav {
    0% { color: white; }
    50% { color: red; }
    100% { color: white; }
}

}


</style>