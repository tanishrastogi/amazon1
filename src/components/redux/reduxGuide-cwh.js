/* An action is a plain object that describes the intention to cause change 
   A reducer is a function that determines changes to an application's state. return the new state and tell the store how to do it
   
*/


// ? Below is a  code that I made while learning about Redux from youtube channel of code with harry

/**
 * ! created a shop.js file 
 * !Created a state Folder 
 * ! Created folders under state folder > action-creators , reducers
 * ! created a index.js , store.js file in state folder
 * ! created index.js file under action-creators folder
 * ! created amountReducer.js file under reducers folder
 * ! created index.js file under reducers folder
 *  
 *?code inside "shop.js"
   import React from "react"
   import { useDispatch } from "react-redux"
   import {actionCreators} from "./state/index.js"
  
   const shop = () => {
      const dispatch = useDispatch();
      return (
         <div>
            <h2>Deposit/withdraw Money</h2>
            <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            
            <button onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
         </div>
      )
   }
  
  
 * 
 * ?code inside "src/state/action-creators/index.js"
 * 
 * export const depositMoney = (amount){
 *  return (dispatch)=>{
 *      dispatch({
 *      type:"deposit",
 *      payload: amount
 *      })
 *  } 
 * }
 * 
 * export const withdrawMoney = (amount){
   return (dispatch)=>{
 *      dispatch({
 *      type:"withdraw ",
 *      payload: amount
 *      })
 *  } 
 * }


 *?code inside "src/state/reducers/amountReducer.js
   
   const reducer = (state=0,action){
     if(action.type === "deposit"){
        return state + action.payload;
     }
     else if(action.type === "withdraw"){
        return state - action.payload;
     }   
     else{
      return state;
     }
    }

    export default reducer;

*?code inside "src/state/reducers/index.js"

   import {combineReducers} from "redux";
   import amountReducer from "./amountReducer"

   const reducers = combineReducers({
      amount: amountReducer
   })

   export default reducers;

*?code inside "src/state/index.js"
   export * as ActionCreators from "./action-creators/index.js"




*?code inside "src/state/store.js"
   import {createStore} from "redux";
   import thunk from "redux-thunk";
   import reducers from "./reducers";

   export const Store = createStore(reducers , {} , applyMiddleware(thunk) )

//todo * ------------ now use the above store in the src/index.js file --------------- * 
*?

*/


