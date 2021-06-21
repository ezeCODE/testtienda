 
  let ERROR_AUTH =   async  (param)=> {
 
    switch (`${param}`) {
        case 'auth/weak-password':
            return "contraseña debil,  minimo 6 carateres"
     
        break;  
         case 'auth/email-already-in-use':
            return " exsiste una cuenta con esta direccion de correo. "
     
        break;  

        case 'auth/invalid-email':
            return "email no valido"
        break; 
        case 'auth/wrong-password':
            return "contraseña no valida"
        break;  

        case 'auth/app-not-authorized':
            return "aplicion de login no autoriazada"
        break;  
        case 'auth/app-deleted':
            return "apliacion de login borrada"
        break; 
       
        case 'auth/argument-error':
             return "argumento de error"
        break; 
        case 'auth/invalid-api-key':
             return "llave api key invalida"
        break; 
        case 'auth/invalid-user-token':
             return "token de usuario invalido"
        break; 
        case 'auth/invalid-tenant-id':
             return "invalid-tenant-id"
        break; 
        case 'auth/network-request-failed':
             return "respuesta de conexcion invalidad"
        break; 
        case 'auth/operation-not-allowed':
             return "operacion no terminada"
        break; 
        case 'auth/requires-recent-login':
             return "require que hayas ingresado hace poco minutos"
        break; 
        case 'auth/too-many-requests':
             return "demasiados intentos."
        break;
        case 'auth/unauthorized-domain':
             return "app login domino no autorizado"    
        break;
        case 'auth/user-disabled':
             return "cuanta de usuario no encontrado"    
        break;
        case 'auth/user-token-expired':
             return "el token de usuario ha expirado"    
        break;
        case 'auth/web-storage-unsupported':
             return "web storage no sportado"    
        break;
       
    
        default:
            break;
    }
  
    

}

export { ERROR_AUTH }
 