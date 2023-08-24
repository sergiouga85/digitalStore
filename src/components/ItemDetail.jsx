import React from 'react'
import ItemCount from './ItemCount'
import {useParams} from 'react-router-dom'
import {Card, CardBody, CardFooter, Stack} from "@chakra-ui/react";

const ItemDetail = ({productos}) => {
  
  const {id}=useParams();
  console.log(id)

  return (
    <>
      {
          <div key={id} className="cardDetailContainer">
            <Card className="cardDetail">
              <CardBody className="Cardbody">
                <img className="imgDetailCard" src={productos.imagen} alt='Arduino Uno' />
                <Stack className="descripcion">
                  <h2>{productos.nombre}</h2>
                  <h3>{productos.descripcion}</h3>
                  <h3>STOCK</h3>
                  <h3>{productos.stock}</h3>
                </Stack>
              </CardBody>
                <h2 className="tituloStock">Unidades</h2>
              <CardFooter className="CardFooterDetail">
                 <ItemCount id={id} nombre={productos.nombre} precio={productos.precio} stock={productos.stock} imagen={productos.imagen} descripcion={productos.descripcion} />
              </CardFooter>  
            </Card>
          </div>
      }

  </>
)
}

export default ItemDetail