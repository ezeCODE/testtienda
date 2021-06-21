
export default {

    // barMobileState solo activa el estado de la variable booleana barMobile, 
    // modificando el diseño de la barra de navegacion
    //solo en mobile. 
    barMobileState(state){

    state.barMobile = !state.barMobile
      

    }, 
    
   // infoMobileState solo activa el estado de la variable booleana InfoBarMobile, 
    // modificando el diseño de la barra top
    //solo en mobile. 
    infoMobileState(state){

    state.InfoBarMobile = !state.InfoBarMobile
       

    },
  
    
}