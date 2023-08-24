import React from 'react'
import {Flex, Box} from "@chakra-ui/react"


const Count = ({count , addQty, substractQty }) => {
  return (
    <Flex className="btnCounter">
        <button className="btnSignos" onClick={addQty} >+</button>
        <Box className="counter"><p>{count}</p></Box>
        <button className="btnSignos" onClick={substractQty} >-</button>
    </Flex>
  )
}

export default Count