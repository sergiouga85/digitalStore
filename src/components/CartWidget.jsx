import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box } from '@chakra-ui/react';
import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext';


const CartWidget = () => {

    const {cart} = useContext(CartContext);

    const quantity=cart.reduce((acc,curr)=>{
        return acc +curr.quantity;
    },0);

    
    return (
        <Flex>
            <Box>
                <FontAwesomeIcon className="carrito" icon={faCartShopping} />
            </Box>
            <Box className="contadorCarrito">
                <h3>{quantity}</h3>
            </Box>
        </Flex>
    )
}

export default CartWidget 