import React , {useState , useEffect} from "react";


function Right({item}){

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

    return <div className="right_buy" style={{padding:"0 0 0 20px"}}>
        <img style={{borderRadius:"5px"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"></img>
        <div className="cost_right">
            <p>Your Order is Eligible for FREE delivery   <br />
            <span style={{color:"#565959"}}>Select this option at checkout.</span></p>
            <h3>Subtotal ({item.length} item): <span style={{fontWeight:"700"}}>&#8377;{price}</span></h3>
            <button className="rightBuy_btn">Process to Buy</button>
            <div className="emi">
                EMI available
            </div>
        </div>    
    </div>;
}

export default Right;