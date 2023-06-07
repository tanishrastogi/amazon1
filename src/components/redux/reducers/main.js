import { getProductsreducer } from "./productreducer";
import { combineReducers } from "redux";
// import { getCartItemReducer } from "./productreducer";

//todo --------> In this file we receive the function exported from ./productreducer file and then we use the combineReducers function to combine all the reducers <-------- todo//

const rootReducers = combineReducers({
    getproductsdata:getProductsreducer
})

//todo --------> Now this rootReducers will be exported from this file and imported in store.js file and will be used in creating a store <-------- todo//


export default rootReducers;





//Todo -----------------------------------> More about combineReducers <---------------------------------- Todo//
/**
 * ? The convention is to call the combination of all your reducers as the rootReducers 
 * ? This method accepts an object 
 * ? Each key/value pair for this object corresponds to a reducer
 * 
 *  const store = createStore(
        rootReducers , 
        composeWithDevTools(applyMiddleware(...middleWare))
    );
    
    
 */