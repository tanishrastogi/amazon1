import React, { useEffect, useState } from "react";

function Subtotal({item}){

   const [price , setPrice] = useState(0);

   useEffect(()=>{
      totalAmount()
   },[item])
   
   console.log(item);

   const totalAmount = ()=>{
      let price=0;
      item.map((i)=>{
      price = price + Number(i.price.cost)
      })
      setPrice(price);
   }

   return <h3 style={{textAlign:"right" , paddingTop:"10px"}}>Subtotal ({item.length} item): <strong style={{fontWeight:"700" , color:"#111"}}>&#8377;{price}</strong></h3> ;
}

export default Subtotal;