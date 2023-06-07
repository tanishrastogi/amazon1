import React from "react";
import "./secondNavbar.css"

function SecondNavbar(){
    return <div className="new_nav">
        <div className="nav_data">
            <div className="left_data">
                <p>All</p>
                <p>Mobile</p>
                <p>BestSeller</p>
                <p>Fashion</p>
                <p>Customer Services</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Today's Deal</p> 
                <p>Amazon Pay</p>
            </div>
            <div className="right_data">
                <img src={require("./../../images/nav.jpg")} />
            </div>
        </div>
        
    </div>
}

export default SecondNavbar;