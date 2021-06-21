

export default {

    // metodos de mutación según las action que se activen, 
    // las variables de estados según una promesa,son genérica, 
    // si tenemos 10 o 20 de estas variables es mejor un número, luego en
    // la documentación se explica a que variable representa, 
    // mi método es parecido a los res http 200, 300, 400, 500

     //success2221 = pertenece a la promesa exitosa se crea una publicación

    statesuccess2021off: async (state) => {  state.success2221 = false },
    renderWarnning222: async (state) => {  state.warning2221 = false },
  
    renderSuccess222 : (state, data)=>{

    state.success2221 = data

    } ,
    
    renderWarnning222 : (state, data)=>{

    state.warning2221 = data


    }

}
