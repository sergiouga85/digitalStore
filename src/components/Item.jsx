
import React from 'react'
/*import {Link} from 'react-router-dom'*/
import { Card, CardBody, CardFooter, Button, Text, Heading } from "@chakra-ui/react";
import {useState,useEffect} from 'react'

const Item = ({ nombre, descripcion, imagen}) => {


    const [data,setData]=useState({})
    
    
    const mostrarDetail=()=>{

       console.log("Vista Detalle");

    }



    return (
        <>
            <Card className="card" maxW='sm'>
                <CardBody>
                    <img className="imgCard" src={imagen} alt='Arduino Uno' />
                    <Heading fontSize='lg'>{nombre}</Heading>
                    <Text fontSize='sm'>
                        {descripcion}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button className="btnDetalles" variant='solid' colorScheme='facebook'onClick={()=>mostrarDetail() }>ver detalles</Button>
                </CardFooter>
                
            </Card>
        </>
    )
}

export default Item

