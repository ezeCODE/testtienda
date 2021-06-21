<template>
<div class="modal-loader-body">
<div class="modal-loader">
<img lazy="loading" class="modal-loader-img" src="@/assets/img/loader-ef-tiendamayorista.png" alt="loader tienda mayorista">
</div>

</div>
</template>
<script>
export default {

    name:'modalloader'

}
</script>
<style lang="scss">
 @import "~/assets/styles/_screen";

.modal-loader-body{ 
    position: fixed; top: 0em; left: 0em; width: 100%; height: 100%; 
    background: rgba(0, 0, 0, 0.555);
    z-index: 8000; 
    display: grid; align-items: center; justify-items: center;
  
}

.modal-loader{ position: relative;    width: 100px;  
   // @include tablet { width: 100px;  }

}
 

.modal-loader-img{
    width: 100%;
}

</style>