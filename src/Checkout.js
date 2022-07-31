import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";



function Checkout() {
  const [{basket,user }, dispatch]= useStateValue();
  return (
    

    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/Revised/Latest/Cashback/New/640x45_2-DAYS._CB631460843_.jpg" 
            alt="Big sale"  className='checkout__ad'/>
            
            {/* ?. basically just handles the error. there is an async period where the user is not there coz it is actually trying to fetch it from firebase */}
            <h3>Hello, {user?.email}</h3>
            <h4 className="checkout__title">Your Shopping Basket
            </h4>
            {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}  
              price={item.price}  
              rating={item.rating} />


            ))}


        </div>
        <div className="checkout__right">
            {/* Subtotal */}
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout