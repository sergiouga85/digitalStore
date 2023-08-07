import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Button, Text, Heading } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
    return (
        <>

            {productos.map((p) => {

                return (
                <div key={p.id}>
                    <Card className="card" maxW='sm'>
                        <CardBody>
                            <img className="imgCard" src={p.imagen} alt='Arduino Uno' />
                            <Heading fontSize='xl'>{p.nombre}</Heading>
                            <Text fontSize='lg'>
                                {p.descripcion}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Link to={`/item/${p.id}`}>
                                <Button className="btnDetalles" variant='solid' colorScheme='facebook'>ver detalles</Button> 
                            </Link>
                        </CardFooter>   
                    </Card>
                    
                </div>
                    
                )
            })
            }
        </>
    )
}

export default ItemList