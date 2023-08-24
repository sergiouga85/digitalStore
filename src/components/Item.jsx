
import React from 'react'
import { Link } from 'react-router-dom'

import { Card, CardBody, CardFooter} from "@chakra-ui/react";

const Item = ({ id, nombre, descripcion, imagen}) => {


    return (
        <>

            <Card className="card">
                <CardBody>
                    <img className="imgCard" src={imagen} alt='Arduino Uno' />
                    <h2>{nombre}</h2>
                    <h3 fontSize='lg'>
                        {descripcion}
                    </h3>
                </CardBody>
                <CardFooter>
                    <Link to={`/item/${id}`}>
                        <button className="btnDetalles">ver detalles</button> 
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default Item

