import React from 'react'
import ItemCount from './ItemCount'
import{useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {useParams} from 'react-router-dom'
import {Card, CardBody, CardFooter, Stack} from "@chakra-ui/react";

const ItemDetail = ({productos}) => {

  const {cart, setCart} = useContext(CartContext);
  const {id}=useParams();
  console.log(id)

  const isItemFound =cart.filter((item)=> item.id ===id);
  const quantityProducto=isItemFound.reduce((acc,curr)=>{
    return acc+curr.quantity;
  },0);
  
  const stockUpdate=(productos.stock-quantityProducto).toString()

  console.log(cart)


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
                  {cart.length>0 ?
                  <h3>{stockUpdate}</h3>:<h3>{productos.stock}</h3> }
                </Stack>
              </CardBody>
                <h2 className="tituloStock">Unidades</h2>
              <CardFooter className="CardFooterDetail">
                 <ItemCount id={id} nombre={productos.nombre} precio={productos.precio} stockUpdate ={stockUpdate} stock={productos.stock} imagen={productos.imagen} descripcion={productos.descripcion} />
              </CardFooter>  
            </Card>
          </div>
      }

  </>
)
}

export default ItemDetail