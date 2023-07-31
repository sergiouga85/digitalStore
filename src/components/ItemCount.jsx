import React from 'react'
import {useState} from 'react'
import {Box} from "@chakra-ui/react"
import {Button,ButtonGroup} from "@chakra-ui/react";

const ItemCount = () => {

    const [counter,setCounter]=useState(0)

    if(counter<0){
        setCounter(0);
    }

    const sumar=()=>{
        setCounter(counter+1)
    }

    const restar=()=>{
        setCounter(counter-1)
    }

    return (

        <>  
            <Box className="counter"><p>{counter}</p></Box>
            <ButtonGroup className="btnItemCount" spacing='2'>    
                <Button onClick={sumar} variant='outline' colorScheme='facebook'>+</Button>
                <Button variant='solid' colorScheme='facebook'>Agregar al carrito</Button>
                <Button onClick={restar} variant='outline' colorScheme='facebook'>-</Button>
            </ButtonGroup>
          
        </>
    )
}

export default ItemCount