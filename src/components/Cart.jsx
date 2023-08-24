import React from 'react'
import{useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {Flex,Box} from "@chakra-ui/react"



const Cart = () => {

  const {cart, setCart} = useContext (CartContext);

  const onDeleteProducto=(id)=>{
    const foundId=cart.find((element)=> element.id ===id);
    const newCart=cart.filter ((element)=>{
      return element !==foundId;
    });

    setCart(newCart);
    
  };

  const onIncremento = (producto)=>{
    const productoElegido = cart.find ((item)=> item.id === producto.id);

    if(productoElegido.quantity >= productoElegido.stock){
      productoElegido.quantity--
   }

    if(productoElegido){
      setCart(cart.map((item) => (item.id === producto.id ?  {... producto, quantity: productoElegido.quantity+1} : item)))


    }else{
      setCart([...cart, producto]);
    }
  };

  const onDecremento = (producto)=>{
    const productoElegido = cart.find ((item)=> item.id === producto.id);

    if(productoElegido.quantity <= 1){
      productoElegido.quantity++
   }

    if(productoElegido){
      setCart(cart.map((item) => (item.id === producto.id ?  {... producto, quantity: productoElegido.quantity-1} : item)))

    
    }else{
      setCart([...cart, producto]);
    }
  };

  console.log(cart)

  return cart.map((producto)=> {

  return (
    
      <div className="mainCart" key={producto.id}>
        <div className="gridCartContainer">

          <div className="cartItem">
            <h2>{producto.nombre}</h2>
          </div>
          <div className="bf-ui-separator cartItem" data-js="separator" data-id="separator_0">

          </div>
          
          <div className="cartItem">
            <img className="imgCart" src={producto.imagen} alt='Arduino Uno' />
          </div>

          <div className="cartItem">
            <h2>Cantidad: {producto.quantity}</h2>
          </div>

          <div className="cartItem">
            <h2>${producto.precio}</h2>
          </div>

          <div className="cartItem">

          <Flex className="btnCounter">
            <button onClick={()=>onIncremento(producto)} className="btnSignos">+</button>
            <Box className="counter"><p>{producto.quantity}</p></Box>
            <button onClick={()=>onDecremento(producto)} className="btnSignos">-</button>
          </Flex>
          </div>
          <div className="cartItem">
            <button   onClick={()=>onDeleteProducto(producto.id)} className="btnEliminar">Eliminar</button>
          </div>
          <div className="bf-ui-separator cartItem" data-js="separator" data-id="separator_0"></div>

          <div className="cartItem">
            <h2>Total : ${producto.precio * producto.quantity}</h2>
          </div>
          
          
        </div>
        
      </div> 
    
  );
});
};

export default Cart