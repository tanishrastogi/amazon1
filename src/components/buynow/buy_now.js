import { Divider } from "@mui/material";
import React, { useEffect, useState , useContext } from "react";
import "./buy_now.css";
import Option from "./option";
import Subtotal from "./subtotal";
import Right from "./right";
import { loginContext } from "../context/context";

function BuyNow() {
    const { account, setAccount } = useContext(loginContext);
    const [cartData, setCartData] = useState("");

    const getdatabuy = async () => {
        const res = await fetch("https://charliesamazon.onrender.com/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        })

        const data = await res.json();
        if (res.status !== 201) {
            console.log("error");
        }
        else {
            setAccount(data);
            setCartData(data.carts);
        }

    }


    useEffect(() => {
        getdatabuy();
    }, [])

    if (cartData !== "") {
        // console.log(cartData);
        return <div className="buyNow_section">
            <div className="buyNow_container">
                <div className="left_buy">
                    <h1>Buy Now</h1>
                    <p>Select All Items</p>
                    <span className="leftBuyPrice">Price</span>
                    <Divider />
                    {
                        cartData.map((e) => {
                            return <div className="item_container">
                                <img style={{ margin: "0 0px 0 -30px " , height:"250px"}} src={e.url} />
                                <div className="buyItem_details" style={{ padding: "0 0 0 30px" }}>
                                    <h3>{e.title.longTitle}</h3>
                                    <h3>{e.title.shortTitle}</h3>
                                    {/* <h3 className="boughtProduct_price">&#8377;{e.price.cost}</h3> */}
                                    <p className="unusuall">Usually dispatched in 8 Days.</p>
                                    <p style={{ paddingBottom: "20px" }}>Eligible for free shipping</p>
                                    <Option deleteData={e.id} get={getdatabuy}/>
                                </div>
                                <h3 className="buyItem_price" style={{fontWeight:"1000" , marginLeft:"5px"}} >&#8377;{e.price.cost}</h3>

                                <Divider style={{width:"300%" , margin:"5px 20px"}} />

                            </div>
                        })

                    }
                    <Subtotal item={cartData}/>
                </div>
                <Right item={cartData}/>
            </div>
        </div>;
    }


}

export default BuyNow;

