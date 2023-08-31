import React from 'react'
import {Flex, Box} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext';
import {useContext, useState} from 'react'


const Count = ({ stock, stockUpdate }) => {

  const {cart} = useContext(CartContext);
  const {count,setCount} = useContext(CartContext);
  const[counter,setCounter]=useState(0);

  
  console.log(count)
  console.log(counter)
  console.log(stockUpdate)


  const addQty1 =() =>{
        
    if(counter<parseInt(stockUpdate)){
        setCounter(counter+1)
    }
}

    const addQty2=() =>{
        if(count<stock){
            setCount(count+1)
        }
}
    

const substractQty1 =() =>{

        if(counter>0){
            setCounter(counter-1)
        }
    }


const substractQty2 =() =>{    

        if(count > 1) {
            setCount(count-1)
        }
}    
    


  return (
    <Flex className="btnCounter">
        { cart.length >0 ? <button className="btnSignos" onClick={addQty1}>+</button> : <button className="btnSignos"onClick={addQty2}>+</button>  }
        <Box className="counter">{cart.length >0 ? <p>{counter}</p> : <p>{count}</p>} </Box>
        { cart.length >0 ? <button className="btnSignos" onClick={substractQty1}>-</button> : <button className="btnSignos" onClick={substractQty2}>-</button>}
    </Flex>
  )
}

export default Count