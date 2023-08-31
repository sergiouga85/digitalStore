import React from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {collection, getDocs,getFirestore,query,where} from 'firebase/firestore'
import {Flex} from "@chakra-ui/react"
import Loading from './Loading'
import CarouselFadeExample from './CarouselFadeExample'

const ItemListContainer = () => {

  const {categoria}=useParams();

  const [productos, setProductos]=useState ([]);
  const [loading, setLoading]=useState (true);

  console.log(productos);

  
      
  useEffect(()=>{

      const db =getFirestore()
      const itemsCollection = collection(db,"productos")

      const queryRef= categoria? query(itemsCollection, where("categoria", "==", categoria)): itemsCollection;

      getDocs(queryRef).then((resp)=>{
        setTimeout(()=>{
            setProductos( resp.docs.map((doc)=> {
              return {... doc.data(), id: doc.id}
            }))
            setLoading(false)
            },500);
          
      })
  }, [categoria]);

  if(loading){
    return <Loading/>
  }
  
  return (
    <>
    <div className="mainCarousel">
      <CarouselFadeExample></CarouselFadeExample>
    </div>
    <Flex className="main">
      <ItemList productos={productos}></ItemList>
    </Flex>
    </>
    
  )
}

export default ItemListContainer
