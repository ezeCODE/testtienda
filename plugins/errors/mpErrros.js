
let mpErros = async (param)=>{
    console.log(param);
     
    switch (param) {
        case 'collector_does_not_comply_with_current_regulation':
            alert("identity validation required")
        return 'identity validation required'
     
        break;
         case 'invalid_collector_id':
            alert("")
            return  'collector_id inválido'
     
        break;
         case 'invalid_sponsor_id':
             alert("")
            return 'sponsor_id is not an active user.'
             

        break;
         case 'invalid_collector_email':
             alert("")
            return 'collector is not collector_email owner'
     
        break;
         case 'invalid_operation_type':
             alert("")
            return 'operation_type invalid.'
     
        break;
         case 'invalid_expiration_date_to':
             alert("")
            return 'expiration_date_to invalid.'
     
        break;
         case 'invalid_date':
             alert("")
            return 'invalid date of expiration.'
     
        break;
         case 'invalid_expiration_date_from':
             alert("")
            return 'expiration_date_from invalid.'
     
        break;
         case 'invalid_items':
             alert("")
            return 'unit_price invalid'
     
        break;
         case 'invalid_back_urls':
             alert("")
            return 'back_urls invalid. Wrong format'
     
        break;
         case 'invalid_payment_methods':
             alert("")
            return 'nstallments invalid. Should be a number between 1 and 36.'
     
        break;
         case 'invalid_marketplace_fee ':
             alert("")
            return 'marketplace_fee must not be greater than total amount.'
     
        break;
        case 'invalid_id':
            alert("")
            return 'preference_id not found.'
     
        break;
        case 'invalid_access_token ':
            alert("")
            return 'access denied'
     
        break;
        case 'invalid_shipments ':
            alert("")
            return 'invalid type (<type>) for field shipments.cost.'
     
        break;
        case ' invalid_binary_mode':
            alert("")
            return 'binary_mode debe ser booleano.'
     
        break;
    
        default:
            break;
    }


}

export { mpErros  }
