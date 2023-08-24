import React from 'react'
import {useState, useContext} from 'react'
import {Flex} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {ButtonGroup} from "@chakra-ui/react";
import { CartContext } from '../context/ShoppingCartContext';
import Count from './Count';



const ItemCount = ({stock, id, precio, nombre, imagen, descripcion}) => {

    const {setCart} = useContext(CartContext);
    const [count,setCount] = useState(1);

    const addQty =() =>{
        if(count<stock){
        setCount(count+1)
        }
    }
        

    const substractQty =() =>{
        if(count > 1) {
        setCount(count-1)
        }
        
    }

    const addToCart =()=>{

        setCart((currItems)=>{

            const isItemFound =currItems.find((item)=> item.id ===id);

            if(isItemFound){
                return currItems.map((item)=> {

                    if(item.id ===id){
                        return { ...item, quantity: item.quantity + count };
                    }else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, quantity: count, precio, nombre, imagen, descripcion, stock}];
          }

        });
    };


    return (

        <>  
            <ButtonGroup className="btnItemCount">

                <Count count={count} addQty={addQty} substractQty={substractQty}  stock={stock}></Count>

                <Flex className="btnAddToCart">
                    <Link to={`/Cart`}>
                        <button  onClick={()=>addToCart()} className="btnAgregar">Agregar al carrito</button>
                    </Link>
                </Flex>      
            </ButtonGroup>
      
        </>
    )
}

export default ItemCount