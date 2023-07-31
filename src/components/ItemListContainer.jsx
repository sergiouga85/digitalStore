import React from 'react'
import ItemList from './ItemList'
import {Flex} from "@chakra-ui/react"


const ItemListContainer = ({productos}) => {

  const getProductos= new Promise((resolve,reject)=>{
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      },2000)
    }else{
      reject(new Error("No Hay Productos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((Error)=>{
      console.log(Error)
    })

  return (
    <Flex className="main">
      <ItemList productos={productos}></ItemList>
    </Flex>
  )
}

export default ItemListContainer