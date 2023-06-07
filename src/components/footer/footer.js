import React from "react";
import "./footer.css";

function Footer(){
    return <footer>
        <div className="footer_container">
            <div className="detail_one">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon cares</p>
            </div>
            <div className="detail_one">
                <h3>Connect with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                
            </div>
            <div className="detail_one">
                <h3>Make money with us</h3>
                <p>Sell on Amazon</p>
                <p>Advertise your product</p>
                <p>Protect and build your brand</p>
                <p>Amazon Pay on Merchants</p>
            </div>
            <div className="detail_one">
                <h3>Let us Help you</h3>
                <p>Covid-19 and Amazon</p>
                <p>Your Account</p>
                <p>100% purchase protection</p>
                <p>Amazon assistant download</p>
            </div>
        </div>
        <div className="lastDetails">
            <img src={require("../../images/amazonLogo.png")}></img>
            <p><span>Conditions of Use & Sale</span><span>Privacy Notice</span><span>Interest-Based Ads</span></p>
        </div>
    </footer>
}

export default Footer;