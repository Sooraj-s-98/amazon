import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function product({ id,title,image,price,rating}) {

  const [{},dispatch]=useStateValue();
  const addToBasket=()=>{

   dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
      },
   });
  };

    return (
        <div className="product">
          <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div  className="product_rating">
                {
                  Array(rating)
                  .fill()
                  .map((_) =>(
                      <p>stars</p>
                  ))
                }
            </div>
          </div>

            <img src={image} alt=""/>
            <button  onClick={addToBasket} >Add to basket </button>
        </div>
    );
}

export default product;
