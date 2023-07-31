import React from 'react'
import ItemCount from './ItemCount'

import {Flex} from "@chakra-ui/react"
import {Card, CardBody, CardFooter,Divider, Heading, Stack,Text } from "@chakra-ui/react";

const ItemDetail = ({ nombre, descripcion, imagen,precio, stock }) => {

  

  return (
    <>
      <Flex className="cardDetailContainer">
        <Card className="cardDetail" maxW='sm'>
          <CardBody>
            <img className="imgDetailCard" src={imagen} alt='Arduino Uno' />
            <Stack mt='6' >
              <Heading size='md'>{nombre}</Heading>
              <Text>
                {descripcion}
              </Text>
            </Stack>
          </CardBody>
          <Text className="tituloStock">Unidades</Text>
          <CardFooter className="CardFooterDetail">
          <ItemCount></ItemCount>
          </CardFooter>  
        </Card>
      </Flex>
     
    </>
  )
}

export default ItemDetail