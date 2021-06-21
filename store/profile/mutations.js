 
export default {
 
 
   loginOn: (state) => {

   state.isLogin = true

   },
 
 
   statusEmail: async (state, data) => {

   state.emailVerified = data

   }, 
   
   greatNewEmail: async (state) => {

   state.resNewEmail  = true 
      
   },

   inLoader : async (state)=>{

   state.loader = true

   },   
   
   outLoader : async (state)=>{

   state.loader = false

   },

   
   profilesuccess : async (state)=>{

   state.updateProfileSuccess = true

   }, 
   
 
   firstObjectId: (state, data) => {
  
   state.objectID = data

   }, 

   chargedDataProfile: async (state, data) => {
  
   state.objectID =  data.uid

   state.userProfile = {
   email :  data.email,
   personalName : data.displayName,
   personalCellphone : data.phoneNumber,
   personalCellphoneArea : data.photoURL,
   objectID : data.uid,

   }
 

   state.isLogin = true
   state.loader = false

   },

    
   loaderOn(state){
    
   state.loader = true

   }, 

   loaderOff(state){
   
   state.loader = false

   }, 



}