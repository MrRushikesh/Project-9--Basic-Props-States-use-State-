import React,{useState} from 'react';
import './product.css';

const Product = (props) => {
    // console.log(props)

    
    const [name] =  useState("Add To Cart")

    const change = () => {
        alert("You'r Dish Added Successfully ✅ Enjoy You'r Food...😊")
    }


    const renderProduct = props.prodData.map((item) => {
        return(
                            
            <div className="item-container" key={item.menu_id}>
            <div className="item-top">
                <div className="top-left-logo">
                    <span>{item.menu_id}</span>
                </div>
                <div className="top-right-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="main-item">
                <img src={item.menu_image} alt={item.menu_name}/>
            </div>
            <h2 className="item-heading">
                {item.menu_name}
            </h2>
            <p className="item-description">
              {item.description}
            </p>
            <h3 className="item-type">
                {item.menu_type}
            </h3>
            <ul className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
            </ul>
            <p className="item-price"><sup><i className="fa-solid fa-indian-rupee-sign"></i></sup>{item.menu_price}/-</p>
            <button className="item-cart-btn" onClick={change}>{name}</button>
        </div>

        )
    })



    return(
       <>
            
            <div className="menuSection">
                <div className="menuHeading">
                    <p className="menuHeading1">Menu Availabe in Restaurant : </p>
                </div>
            
                <div className="main-container">
                     {renderProduct}
                </div>
            </div>
       </>
    )
}

export default Product;