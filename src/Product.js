import React from 'react'
import './Product.css';
import { useStateValue } from "./StateProvider";
import CurrencyFormat from 'react-currency-format';

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch]= useStateValue();
  const addToBasket = ( )=>{
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title:title, 
        image:image,
        price:price,
        rating:rating,
      },

    });

  };
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
      <CurrencyFormat 
              renderText= {(price)=>(
      <>
        <p className="product__price">
          <strong>{price}</strong>
        </p>
        
      </>
      )}
      decimalScale = {2}
      value= {price}
      displayType = {"text"}
      thousandSeparator = {true}
      prefix={"₹"}

    />
           
    <div className="product__rating">
    {Array(rating).fill().map((_,i) =>(
        <p>⭐</p>

    ))}
                
                
            </div>
        </div> 
        <img src={image} alt={title} />
        <button onClick ={addToBasket}>Add to Basket</button>

        
    </div>
    
  
  
  )
}

export default Product