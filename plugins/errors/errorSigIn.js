
 let SIGIN_ERROR = async (param)=>{

    switch (param) {
        case 'auth/invalid-email':
            return "email invalido"
     
        break;
        
        case 'auth/user-disabled':
            return "cuenta en suspencion"
     
        break;
        
        case 'auth/user-not-found':
            return "el email no existe"
     
        break;
        
        case 'auth/wrong-password':
            return "contraseña no validada"
     
        break; 
        
        case 'auth/email-already-exists':
            return "Exsiste una cuenta con este emial"
     
        break;
        
        case 'auth/internal-error':
            return "Problemas internos, por favor vuelva en unos minutos."
     
        break;
    
        default:
            break;
    }


 }

 export { SIGIN_ERROR }


