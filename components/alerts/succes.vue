<template>
  <div class="alert alert-success">
      <h4 class="alert-title" v-if="title" > {{ title }}  </h4>
      <p class="alert-paragraph" v-if="paragraph" >
        {{ paragraph }}
      </p>
    
  </div>
</template>

<script>
export default {
 
  props:{
    title:{
      type:String, 
      defualt:"...",
      required:true
    },
    
    paragraph:{
      type:String, 
      defualt:"...",
      required:true
    }
  }

}
</script>