<template>
<div class="btn-float" @click="activate()" >
  lista productos
</div>
</template>
<script>     
import {  mapMutations } from "vuex";

export default {

    name:"btnFloat",

    methods:{
       ...mapMutations({
         activate : 'frontend/barMobileState'
       })
    }

}
</script>