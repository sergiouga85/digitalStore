import React from 'react'
import ItemDetail from './ItemDetail'
import {Flex} from "@chakra-ui/react"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {doc, getDoc,getFirestore} from 'firebase/firestore'
import CarouselFadeExample from './CarouselFadeExample'
import Footer from './Footer'



const ItemDetailContainer = () => {

  const {id}=useParams();
  console.log(id)

  const [productos, setProductos]=useState ([]);
  

  console.log(productos);

   
  useEffect(()=>{

    const db =getFirestore()
    const oneItem= doc(db,"productos",`${id}`)
    getDoc(oneItem).then((snapshot)=>{
        if (snapshot.exists()){
            const docs=snapshot.data();
            setProductos(docs)
        }
    })
}, []);
 

  return (
    <>
      <div className="mainCarousel">
        <CarouselFadeExample></CarouselFadeExample>
      </div>
      <Flex className="main">
        <ItemDetail productos={productos}></ItemDetail>
      </Flex>
      <Footer></Footer>
    </>
  )
}

export default ItemDetailContainer