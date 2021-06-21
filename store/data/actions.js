import { db , storeageRef } from "~/plugins/firebase/database"
 
// commit Activamos una mutación, podemos pasarle diferentes tipos de datos.
// dispatch Podemos llamar a otra actions, en caso de requerir
// params Puede ser un solo datos o un objeto. Y "jugar con más opciones. "

// commit puede estar en la misma carpeta =  commit('renderSuccess222')
// o en otra carpeta
// commit('alerts/renderSuccess222', false, { root : true })



export default {
 
    // uploaderImages, es el metodo que funciona para subir una image. 
    // nos devuelve  una promesa que es la url (pública) de la imagen, 
    // cuando nos aseguramos que la imagen subió al Storage, podemos elegir 
    // condicionar, según los datos de params, 
    // trabajo con los valores , y decido, puedo utilizar otros metodos 
    // y o enviar los datos a base de dato correspondiente.



    uploaderImages : async ({commit, dispatch}, params) =>{

    commit('alerts/renderSuccess222', false, { root : true })
    commit('profile/inLoader', null, { root : true })

    var ref = storeageRef.child(`images/${params.imagename}`)
    var uploadTask = ref.put(params.fileImage);
    
    uploadTask.on('state_changed', function(snapshot){
        
    const progressBar = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    console.log( progressBar , '%' )

    }, function(error) {

    alert("algo ha ocurrido, vuelva a intentar mas tarde")
    

    }, function() {

    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {   
    
    if(downloadURL){

    let res = {   
    when:  params.when ,
    docId: params.docId ,
    docId: params.docId ,
    imagename : params.imagename, 
    cover : downloadURL, 
    descr : params.descr, 
    isnew: params.isnew,
    price: parseInt(params.price),

    }
   
  
    dispatch('newProduct', res)

    }
    })
    })

    },
    

    //método que ingresa los datos a la base de datos firestore correspondiente. 
    newProduct : async ({ commit }, params)=>{ 

    db.collection('products').doc(params.docId).set(params).then((  ) => {

    commit('profile/outLoader', null, { root : true })
    commit('alerts/renderSuccess222', true, { root : true })

    }).catch((err) => {
    console.log(err);
    commit('alerts/renderWarnning222', true, { root : true })
    commit('profile/outLoader', null, { root : true })

    });

    },


    // metodo que busca un solo documentos , 
    // params tiene un solo datos, que es el id del documento
    dataProduct : async ({ commit }, params)=>{ 

    commit('clearDataProduct')
    db.collection('products').doc(params).get().then( ( res) => {
        
    commit('chargedDataProduct', res.data())
   
    }).catch((err) => {
    console.log(err);
    });

    },


    // deleteProduct permite borrar un solo documento, 
   // params tiene un solo datos, que es el id del documento
    deleteProduct : async ({ }, params)=>{ 

    db.collection('products').doc(params).delete().then(() => {
    
    }).catch((err) => {
        
    });

    },


    // dataProductUpdate permite actualizar un documento selecionado, mediente id
    //params es un objeto, con nombre de llave dinamico, para re utilizar la
    //estructura dl objecto. 
    // en el compoente la funcion solo cambia los atributos a modificar. 
    //  @click="updateProduct('price' , parseInt(price))"
    //  @click="updateProduct('title' , title)"
    dataProductUpdate : async ({ dispatch }, params)=>{ 
 
    db.collection('products').doc(params.obj.idProduct).update(params.obj).then(( res ) => {
 
    dispatch('dataProduct', params.obj.idProduct )

    }).catch((err) => {
    console.log(err);

    });


    },


    //  callProductsList permite llamar a una collection de documentos
    callProductsList: async ({  commit }, params)=>{ 

    db.collection('products').onSnapshot( (res)=>{
    commit('clearProductsList')

    res.forEach( docs=>{

    commit('chargedProductsList' , docs.data())

    } )

    } )


    



    }

}