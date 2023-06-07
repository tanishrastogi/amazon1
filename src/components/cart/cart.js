import { Divider } from "@mui/material";
import React, { useContext, useEffect , useState} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./cart.css";
import { loginContext } from "../context/context";

function Cart(e){
    // e.preventDefault();

    
    const {id , productInfo} = useParams("");
    const history = useNavigate("")

    const {account , setAccount} = useContext(loginContext)
    
    const [individiualData , setIndividualData] = useState("");

    // console.log(individiualData.url);

    const getIndividualData = async()=>{
        const res = await fetch("/getProducts/"+productInfo+"/"+id , {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const data = await res.json();
        if(res.status!==201){
            console.log("No Data Available");
        }
        else{
            // console.log("getdata");
            setIndividualData(data);
        }
    }
    // useEffect(()=>{
    //     getIndividualData();
    // } , [id])

    getIndividualData();

    let date = new Date();    let d = date.getDate();
    let d1 =d;
    let d2 =d;
    let m = date.getMonth();
    let m2=m;
    let month = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
    // console.log(d);
    if(month[m]=="Feb"){
        if(d>24){
            d1=d-24;
            m2=m+1;
            if(d>26){
                d2 = d-26;
            }
        }
        else{
            d1=d+4;
            d2=d+2;
        }
        
    }
    else if(month[m]=="Apr" || month[m]=="Jun" || month[m]=="Sept" || month[m]=="Nov" ){
        if(d>26){
            d1 = d-26;
            m2 = m+1;
            if(d>28){
                d2 = d-28;
            }
        }
        else{
            d1=d+4;
            d2=d+2;
        }
    }
    else{
        if(d>27){
            d1 = d-27;
            m2 = m+1;
            if(d>29){
                d2 = d-29;
            }
        }
        else{
            d1=d+4;
            d2=d+2;
        }
    }

    
    
    async function addtocart(id , productInfo){
        const checkres = await fetch("/addcart/"+productInfo+"/"+id ,  {
            method:"POST",
            headers:{
                Accept :"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({individiualData}),
            credentials:"include"
        });  
        const data1 = await checkres.json();
        console.log(data1);

        if(checkres.status === 401 || !data1){
            console.log("user invalid");
            alert("please signin first")
            history("/login");
        }
        else{
            // alert("data added to cart")
            history("/buynow");
            setAccount(data1);
            
        }
        // return data1;
    }

    // const data0054A = addtocart(id , productInfo);
    
    // module.exports = data0054A;
    

    



    if(individiualData!=""){
        return <div className="cart_section">
        <div className="cart_container">
            <div className=" left_cart">
                <img src={individiualData.url} alt="cart image" />
                <div className="cart_btn">
                    <button className="cart_btn1" onClick={()=>{addtocart(id , productInfo)}}>Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>
                </div>
            </div>
            <div className=" right_cart">
                <h3>{individiualData.title.shortTitle}</h3>
                <h4>{individiualData.title.longTitle}</h4>
                <Divider />
                <p className="mrp">M.R.P : <span>&#8377;{individiualData.price.mrp}</span></p>
                <p>Deal of the Day : <span style={{textDecoration:"line-through"}}>&#8377;{individiualData.price.mrp}</span> <span style={{color:"#B12704"}}>&#8377;{individiualData.price.cost}</span></p>
                <p>You save:<span style={{color:"#B12704"}}>&#8377;{individiualData.price.mrp-individiualData.price.cost} ({Math.floor(((individiualData.price.mrp-individiualData.price.cost)/individiualData.price.mrp)*100)}% off) </span> </p>
                <div className="discount_box" style={{margin:"10px 0 0 0"}}>
                    <h5 style={{paddingBottom:"10px"}}>Discount: <span style={{color:"#111"}}>Get extra 5% discount as CashBack on this order  </span></h5>
                    <h4 style={{color:"#007185" , paddingBottom:"10px",fontSize:"14px" , margin:"5px 0 0 0"}}>Free Delivery: <span style={{color:"#111" ,fontSize:"15px", fontWeight:"600"}}>{d2} {month[m2]} to {d1} {month[m2]}</span></h4>
                    <p style={{paddingBottom:"10px"}}>Fastest Delivery: <span style={{color:"#111" , fontWeight:"600"}}>Tomorrow 11am</span></p>
                </div>
                <div className="cart_features">
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"></img>
                        <p>Free Delivery</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"></img>
                        <p>Pay on Delivery</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"></img>
                        <p>7 Days Replacement</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"></img>
                        <p>Amazon Delivered</p>
                    </div>
                </div>
                <p className="description" style={{color:"#111" , fontWeight:"800"}}>About this item: <br />
                    <span style={{color:"#565959" , fontSize:"13px" , letterSpacing:"0.4"}}>
                    <ul style={{padding:"0 0 0 20px"}}>
                        <li>{individiualData.description}</li>
                        <li>{individiualData.description2}</li>
                        <li>{individiualData.description3}</li>
                        <li>{individiualData.description4}</li>
                    </ul>
                    </span>
                </p>
            </div>        
        </div> 
    </div>
    }
}

export default Cart;