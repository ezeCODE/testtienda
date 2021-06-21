import { db , logins } from "~/plugins/firebase/database"

export default {

    // sendOffer permite estando logeado, enviar una oferta a un producto (documento) selecionado
    // params es un objeto 
    sendOffer  : async ({ commit} , params )=>{

    db.collection('products').doc(params.idproduct).collection('offers').doc(params.createId).set(params).then((res) => {

    commit('alerts/renderSuccess222' , true , { root : true } )

    }).catch((err) => {
    commit('alerts/renderWarnning222'  , true , { root : true } )
    console.log(err);

    });

    },

 
   // checkProfile permite ver el estado del user , si esta registrado o no. 
   // en caso de ingresado, se le carga los datos correspondiente, en este caso 
   //solo datos del authentication de firebase. 
    checkProfile : async( { commit })=>{
  
    logins.onAuthStateChanged( (user)=>{

    if(user){

    commit('loginOn' , user.email)
    commit('statusEmail' , user.emailVerified)
    commit('chargedDataProfile', user)

    }else {  

    commit('outLoader')

    }
    })


    },

 
    //firestoreUpdateEmail este método permite actualizar el email de 
    // una cuenta, esto solo es firebase authentication, no es base de datos, 
    // de ser necesario con la actualización exitosa, también se debería de actualizar el
    //email en la base de datos correspondiente. 
    firestoreUpdateEmail : async ({dispatch} , params)=>{

    let newemail = logins.currentUser

    newemail.updateEmail(params.email).then(function() {

    //dispatch('algoliaUpdateEmail', params)
    }).catch(function(error) {

    alert("vuelva intentar despues");
    });

    },

 



    }