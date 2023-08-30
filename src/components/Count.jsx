import React from 'react'
import {Flex, Box} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext';
import {useContext} from 'react'


const Count = ({ stock, stockUpdate }) => {

  const {cart,setCart} = useContext(CartContext);
  const {count,setCount} = useContext(CartContext);

  
  console.log(count)
  console.log(stockUpdate)


  const addQty1 =() =>{
        
    if(count<parseInt(stockUpdate)){
        setCount(count+1)
    }
}

if(parseInt(stockUpdate)<count){
    setCount(parseInt(stockUpdate))
}




const addQty2=() =>{
    if(count<stock){
    setCount(count+1)
    }
}
    

const substractQty =() =>{

    if(cart.lengh>0){
        if(count<parseInt(stockUpdate)){
            setCount(count-1)
        }
    }
    else{
        if(count > 1) {
            setCount(count-1)
        }
    }    
    
}

  return (
    <Flex className="btnCounter">
        { cart.length >0 ? <button className="btnSignos" onClick={addQty1}>+</button> : <button className="btnSignos"onClick={addQty2}>+</button>  }
        <Box className="counter"><p>{count}</p></Box>
        <button className="btnSignos" onClick={substractQty} >-</button>
    </Flex>
  )
}

export default Count