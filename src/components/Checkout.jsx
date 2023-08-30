import React from 'react'
import{useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../context/ShoppingCartContext'
import Cart from './Cart'

const Checkout = () => {

    const {cart, setCart} = useContext (CartContext);

    const quantity=cart.reduce((acc,curr)=>{
        return acc +curr.quantity;
    },0);

    const precio=cart.reduce((acc,curr)=>{
        return acc +curr.precio;
    },0);


  return (
       <>
            <Cart></Cart>
            
            <div className="gridCheckoutContainer">
                <div className="CkeckoutItem">
                    <h5>Resumen de compra</h5>
                </div>
                    
                <div className="CkeckoutItem separadorResumen" data-js="separator" data-id="separator_0"/>
                    
                <div className="CkeckoutItem">
                    <h6>Productos ({quantity})</h6>
                </div>
                <div className="CkeckoutItem">       
                    <h4>TOTAL $ {precio*quantity}</h4>
                </div>
                <div className="CkeckoutItem">
                    <Link to={`/SendOrder`}> 
                        <button className="btnCheckout" >Finalizar compra</button>
                    </Link> 
                </div>  
            </div>
       
       </>
    
  )
}

export default Checkout