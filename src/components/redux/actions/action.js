
export const getProducts = ()=>async(dispatch)=>{
   try{
      
      const data = await fetch("/getproducts", { 
         method:"GET",                                                             // other parameters can be  POST , PUT , DELETE etc.
         headers:{                                                                 //todo --------> data is being fetched from the api created inside router.js inside the backend part <-------- todo//
            "Content-Type":"application/json"                                       
         }
      });
      const res = await data.json();                                                     // json() method parses the body text to a json object
      // console.log(res);                                              
       dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})                          //todo --------> this dispatch method will now send the fetched data to ./reducers/productreducer.js file  <-------- todo//
   }
   catch(error){
      dispatch({type:"FAIL_GET_PRODUCTS",payload:error.message})

   }
};


