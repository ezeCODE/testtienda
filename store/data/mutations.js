export default {
    
    clearProductsList: async (state) => {   state.productsList =  []   },
    clearDataProduct : ( state  )=>{ state.oneProductData = [] }, 
  
    chargedDataProduct: (state, data) => {
 
    state.oneProductData.push(data)
    
    }, 
    
    chargedProductsList: (state, data) => {
 
    state.productsList.push(data)
    
    },
    
}