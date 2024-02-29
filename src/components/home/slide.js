import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
// import { mainData } from "./productData";
import "./home.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Slide({ productInfo, title }) {
    let name = productInfo;

    const { products } = useSelector(state => state.getproductsdata);    //selector function inside 

    let datas = products[0] ? products[0] : ""
    // console.log(datas);

    if (datas != "") {
        console.log(datas);
        console.log(products);
        return <div className="products_div">
            <div className="products_section">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
                <div className="products_deal">
                    <h3>{title}</h3>
                    <button className="view_btn btn btn-primary">View All</button>
                </div>
                <Divider style={{ background: "black", height: "2px" }} />
                <Carousel

                    responsive={responsive}           // these properties are given on the page https://www.npmjs.com/package/react-multi-carousel
                    draggable={true}                 // properties are given at the last of the above page  
                    infinite={true}
                    swipeable={true}
                    showDots={false}
                    centerMode={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
                // customLeftArrow={zIndex="1"}

                >
                    {
                        datas[name].map((e) => {
                            return <div className="product_box">
                                    <NavLink to={"/getProducts/" + productInfo + "/" + e.id}>          
                                    <div className="box_image">
                                        <img className="products_imgs" src={e.url} alt="product"></img>
                                    </div>
                                    </NavLink>
                                    <p className="products_name">{e.title.shortTitle}</p>
                                    <p className="products_offer">{name == "products" ? e.discount : e.description}</p>
                                    <p className="products_tagline">{e.tagline}</p>
                                </div>
                        })
                    }

                </Carousel>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
            </div>
        </div>
    }
    else{
        <div className="product_box">
            Since the Backend is on render , it takes some time to show products
        </div>
    }

}





















//     return <div className="products_div">
//         <div className="products_section">
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
//             <div className="products_deal">
//                 <h3>{title}</h3>
//                 <button className="view_btn btn btn-primary">View All</button>
//             </div>
//             <Divider style={{ background: "black", height: "2px" }} />
//             <Carousel

//                 responsive={responsive}           // these properties are given on the page https://www.npmjs.com/package/react-multi-carousel
//                 draggable={true}                 // properties are given at the last of the above page  
//                 infinite={true}
//                 swipeable={true}
//                 showDots={false}
//                 centerMode={true}
//                 autoPlay={true}
//                 autoPlaySpeed={4000}
//                 keyBoardControl={true}
//                 removeArrowOnDeviceType={["tablet", "mobile" ]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//                 containerClass="carousel-container"
//                 // customLeftArrow={zIndex="1"}

//             >
//                 {
//                     mainData[name].map((e) => {
//                         return <div className="product_box">
//                             <div className="box_image">
//                                 <img src={e.url} alt="product"></img>
//                             </div>
//                             <p className="products_name">{e.title.shortTitle}</p>
//                             <p className="products_offer">{name == "products" ? e.discount : e.description}</p>
//                             <p className="products_tagline">{e.tagline}</p>
//                         </div>
//                     })
//                 }

//             </Carousel>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
//         </div>
//     </div>
// }

export default Slide;
