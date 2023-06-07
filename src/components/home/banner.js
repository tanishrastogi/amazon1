import React from "react";
import Carousel from "react-material-ui-carousel"

const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]


function Banner(){
    return <div>
        <Carousel 
        indicators={false}
        navButtonsAlwaysInvisible={true}
        cycleNavigation={true}
        navButtonsProps={{style:{
            position:"relative",
            opacity:"0.5"
        }}}
        >
            {data.map(function(img,i){
                return <img className="bannerImg" src={img}></img>;
            })}
        </Carousel>
    </div>
}

export default Banner;