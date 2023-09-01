import React from 'react'
import {useContext} from 'react'
import {Flex,Box} from "@chakra-ui/react"
import {ButtonGroup} from "@chakra-ui/react";
import {CartContext } from '../context/ShoppingCartContext';
import {useState} from 'react'
import swal from 'sweetalert'




const ItemCount = ({stock, id, precio, nombre, imagen, descripcion,stockUpdate}) => {


    
    const {cart,setCart} = useContext(CartContext);
    const [count,setCount] = useState(0);


  const addQty =() =>{
        
        if(count<stockUpdate){
            setCount(count+1)
        }
    }   

    const substractQty =() =>{

        if(count>0){
            setCount(count-1)
        }
    }

    if(cart.length>0){

        if(parseInt(stockUpdate)<count){
            setCount(stockUpdate)
        }

    }

    const addToCart =()=>{

        swal({   
            title:"El producto fue agregado !!!",
            text: "Para ver el detalle haga click en el carrito ",
            icon:"success",
            button:"Aceptar"
        });

        if(stockUpdate==0){

            swal({   
                title:"No Hay stock del producto!!!",
                text: "En breve habra stock disponible",
                icon:"error",
                button:"Aceptar"
            });

        }

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
                <Flex className="btnCounter">
                    <button className="btnSignos" onClick={()=>addQty()}>+</button>
                    <Box className="counter"><h3>{count}</h3></Box>
                    <button className="btnSignos" onClick={()=>substractQty()}>-</button>
                </Flex>
                <Flex className="btnAddToCart">   
                    <button  onClick={()=>addToCart()} className="btnAgregar">Agregar al carrito</button> 
                </Flex>    
            </ButtonGroup>
        </>
    )
}

export default ItemCount