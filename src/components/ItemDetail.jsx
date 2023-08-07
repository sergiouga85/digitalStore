import React from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import {Card, CardBody, CardFooter, Heading, Stack,Text ,Box} from "@chakra-ui/react";

const ItemDetail = ({productos}) => {
  
  const {id}=useParams();

  const filteredProducts=productos.filter((producto)=>producto.id==id)

  return (
    <div>
      {filteredProducts.map((p)=>{

        return(
          <div key={p.id} className="cardDetailContainer">
            <Card className="cardDetail" maxW='sm'>
              <CardBody>
                <img className="imgDetailCard" src={p.imagen} alt='Arduino Uno' />
                <Stack className="descripcion" mt='6' >
                  <Heading size='md'>{p.nombre}</Heading>
                  <Text fontSize='xl'>{p.descripcion}</Text>
                  <Text>STOCK</Text>
                <Text fontSize='xl'>{p.stock}</Text>
                </Stack>
              </CardBody>
                <Text className="tituloStock">Unidades</Text>
              <CardFooter className="CardFooterDetail">
              <ItemCount></ItemCount>
              </CardFooter>  
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail