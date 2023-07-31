
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box } from '@chakra-ui/react';
import React from 'react';

const CartWidget = () => {
    return (
        <Flex>
            <Box>
                <FontAwesomeIcon className="carrito" icon={faCartShopping} />
            </Box>
            <Box className="contadorCarrito">
                <h3>5</h3>
            </Box>
        </Flex>
    )
}

export default CartWidget 