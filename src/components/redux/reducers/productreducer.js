const products =[]
const cart =[]

export const getProductsreducer = (state = {products} , action)=>{           //todo --------> This function will now store the data inside products array and then this function will be sent inside the ./main.js file. <-------- todo//
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS": 
            // console.log(action.payload);
            return {products:action.payload};
        case "FAIL_GET_PRODUCTS": return {products:action.payload};
        default: return state;

        
    }

}
