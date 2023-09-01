import React from 'react'
import ItemCount from './ItemCount'
import{useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {useParams} from 'react-router-dom'
import {Card, CardBody, CardFooter, Stack} from "@chakra-ui/react";

const ItemDetail = ({productos}) => {

  const {cart} = useContext(CartContext);
  const {id}=useParams();
  console.log(id)

  const isItemFound =cart.filter((item)=> item.id ===id);
  const quantityProducto=isItemFound.reduce((acc,curr)=>{
  return acc+curr.quantity;
},0);

const stockUpdate=(productos.stock-quantityProducto)

  

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
                  <h2>STOCK</h2>
                  {cart.length>0 ?
                  <h2>{stockUpdate}</h2>:<h2>{productos.stock}</h2> }
                </Stack>
              </CardBody>
                <h2 className="tituloStock">Unidades</h2>
              <CardFooter className="CardFooterDetail">
                 <ItemCount id={id} nombre={productos.nombre} stockUpdate={stockUpdate} precio={productos.precio} stock={productos.stock} imagen={productos.imagen} descripcion={productos.descripcion} />
              </CardFooter>  
            </Card>
          </div>
      }

  </>
)
}

export default ItemDetail