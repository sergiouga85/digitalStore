import React from 'react'
import{useContext} from 'react'
import { Flex} from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import {CartContext} from '../context/ShoppingCartContext'
import Cart from './Cart'
import Footer from './Footer'
import carritoVacio from '../assets/img/carritoVacio.png'

const Checkout = () => {

    const {cart} = useContext (CartContext);

    const quantity=cart.reduce((acc,curr)=>{
        return acc +curr.quantity;
    },0);

    const precio=cart.reduce((acc,curr)=>{
        return acc +curr.precio;
    },0);


  return (

       <>  
        {cart.length <=0 ?
            <div className="carritoVacioConatiner">
                <img className="carritoVacioImg" src={carritoVacio} alt="carritoVacio"/>
                <h6 className="parrafoCarritoVacio">No hay productos en el carrito</h6>
            </div>:<Cart></Cart>}
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
            <Footer></Footer>
       
       </>
    
  )
}

export default Checkout