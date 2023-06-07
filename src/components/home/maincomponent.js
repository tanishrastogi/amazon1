import React, { useEffect } from "react";                                                                                 
import Banner from "./banner";
import Slide from "./slide";
import "./home.css";
import Footer from "../footer/footer";
import { getProducts } from "../redux/actions/action";
import { useDispatch , useSelector } from "react-redux";


function MainComponent(){
    
    // z                                                                                                  //! What is the use of useSelector? 
    // console.log(products);                                                                             //? useSelector is a hook that react-redux library provides which acts equivalent to the map state to props function        
    
    // now we will use the dispatch that was used in action.js file
    
    const dispatch = useDispatch();                                                                    //? It accepts a function as a Parameter known as selector function. This function receives redux state as its argument.                
    useEffect(()=>{                                                                                    //? To access a number in the redux state , we can use the  command -----> const num =  useSelector(state => state.number)                    
        dispatch(getProducts());    
    } , [dispatch]);    
    
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
                                                                             
        return <div className="home_section">                                                              
        <div className="banner_part"> 
            <Banner />
            
        </div>
        <div className="AllSlides">
        <div className="slide_part">
            <div className="left_slide">
                <Slide title="Deal of the Day" productInfo="deal"/>
            </div>
            <div className="right_slide">
                <h4>Festive Latest Launches</h4>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
            </div>
        </div>
        <Slide title="Best Seller" productInfo="bestSellers" />
        <Slide title="Upto 80% off" productInfo="products" />
        <Slide title="Today's Deal" productInfo="todaysDeal"/>
        </div>
        
    </div>
}

export default MainComponent;