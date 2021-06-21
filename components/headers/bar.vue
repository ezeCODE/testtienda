<template>
<div class="bar" :class="{ 'bar-render' : BAR }" >

  <ul class="bar-ul">
  <li class="bar-li" @click="InfoState()"> <n-link to="/" class="bar-li-link"> Inicio </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> joyas </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> muebles </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> documentos </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> cuadros </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> arte y deco </n-link> </li>
  <li class="bar-li" @click="InfoState()"> <n-link to="/"  class="bar-li-link"> automobiles </n-link> </li>
  <li class="bar-li" @click="InfoState()" > <n-link to="/" class="bar-li-link"> ropa y tv </n-link> </li>
   </ul>

</div>
</template>
<script>
import {  mapActions, mapMutations, mapState } from "vuex";
 
export default {

  computed:{
  ...mapState({
  BAR : state => state.frontend.barMobile
  })
  },

  beforeMount(){
  this.chekUserProfile()

  },

  methods:{
  ...mapActions({
  chekUserProfile : 'profile/checkProfile'
  }),
  
  ...mapMutations({
  InfoState : 'frontend/barMobileState'
  })


  }

}
</script>
<style lang="scss">
@import "../../assets/styles/_screen";

.bar{ 
   @include desktop {
  &:before { content: ""; width: 10000px; left: 0em; height: 60px;
  background: rgb(255, 255, 255);z-index:-1;  border-bottom: 2px red solid;
  
  }

  }
  
  position: fixed; top: 0px; background: #dff5ff; width: 90%; height: 100%; z-index: 6000;
  margin-left: -100%; transition: margin-left .5s ease-in-out ;
  @include desktop { left: 0em ; margin-left: 0%; width: 100%; max-width: 1600px; 
  position: relative; height: 60px; z-index: 700;
  background: #ffffff;
  border-bottom: 2px solid #8C0D24;
   
  }
  
}

.bar-render{ margin-left: 0%; }

.bar-ul{ display: grid; grid-template-columns: repeat(1, 1fr); align-content: flex-start;
    @include desktop { grid-template-columns: repeat(10, max-content); align-items: flex-start; }
    height: 100%; align-items: center;
    
}

.bar-li{ position: relative; font-weight: 700; text-align: start;  box-sizing: border-box; padding: 1em 1em;
  overflow: hidden;  z-index: 1;
  @include tablet { line-height: 2em; }

}

.bar-li-link{ list-style: none; font-size: 1.2em;  font-family: 'Roboto', sans-serif;
  color: rgb(255, 255, 255); text-decoration: none; cursor: pointer;  
  &:after { display: block;position: absolute;  margin: 0;
  top: 0; bottom: 0; left: 0; right: 0; content: '.'; color: transparent;  width: 1px;
  height: 1px; border-radius: 50%; background: transparent;

  }

  &:hover:after { animation: circle 1.5s ease-in forwards; }

  @include tablet {  color: rgb(88, 24, 24);  }

}
 

@keyframes circle {
  0% {
    width: 1px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 1px;
    z-index: -1;
      background: rgb(224, 224, 224);
    border-radius: 100%;
  }
  100% {
    background: #eee;
    height: 5000%;
    width: 5000%;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 0;
  }
}




</style>