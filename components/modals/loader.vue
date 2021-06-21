<template>
<div class="container-loader">
<img lazy="loading" class="loader-img" src="@/assets/img/loader-ef-tiendamayorista.png" alt="loader tienda mayorista">
</div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
@import "~/assets/styles/_screen";

.container-loader{ position: relative;  width: 50px; 
    @include tablet { width: 100px;  }

}
 
.loader-img{ width: 100%; }

</style>


