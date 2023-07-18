
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box } from '@chakra-ui/react';
import React from 'react';

const CartWidget = () => {
    return (
        <Flex>
            <Box>
                <FontAwesomeIcon icon={faCartShopping} />
            </Box>
            <Box>
                <p>5</p>
            </Box>
        </Flex>
    )
}

export default CartWidget 