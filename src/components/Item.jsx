
import React from 'react'
import { Link } from 'react-router-dom'

import { Card, CardBody, CardFooter, Button, Text, Heading } from "@chakra-ui/react";

const Item = ({ id, nombre, descripcion, imagen}) => {



    return (
        <>

            <Card className="card" maxW='sm'>
                <CardBody>
                    <img className="imgCard" src={imagen} alt='Arduino Uno' />
                    <Heading fontSize='xl'>{nombre}</Heading>
                    <Text fontSize='lg'>
                        {descripcion}
                    </Text>
                </CardBody>
                <CardFooter>
        
                <Link to={`/itemDetailContainer/${id}`}>
                    <Button className="btnDetalles" variant='solid' colorScheme='facebook'>ver detalles</Button> 
                </Link>
            
                </CardFooter>
            </Card>
        </>
    )
}

export default Item

