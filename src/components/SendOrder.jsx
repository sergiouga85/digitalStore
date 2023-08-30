import React from 'react'
import{useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import {useState} from 'react'

const SendOrder = () => {

    const {cart, setCart} = useContext (CartContext);
    const [nombre, setNombre]=useState("")
    const [email, setEmail]=useState("")
    const [orderId, setOrderId]=useState(null)

    const db = getFirestore()


    const handleSubmit=(e)=>{
        e.preventDefault()
        addDoc(orderCollection, order).then(({id})=>
        setOrderId(id))
        setCart([])   
    }

    const quantity=cart.reduce((acc,curr)=>{
        return acc +curr.quantity;
    },0);

    const precio=cart.reduce((acc,curr)=>{
        return acc +curr.precio;
    },0);

    const total= `'$${(precio*quantity)}`;

    const items=cart.map((item)=>item={nombre: item.nombre, cantidad: item.quantity, precio: item.precio})
 
    console.log(items);
  
    const order={
        nombre,
        email,
        items,
        total
    }
    
   
    const orderCollection= collection(db,"orden")

    
  return (
    <div>
        <h1>Orden de compra</h1>
        <form onSubmit={handleSubmit}>
            <label>nombre y Apellido: </label>
            <input type='text' placeholder='Nombre y Apellido'onChange={(e)=> setNombre(e.target.value)}></input>
            <label>Email: </label>
            <input type='text' placeholder='Email'onChange={(e)=> setEmail(e.target.value)}></input>
            <button type="submit">Enviar</button>
        </form>
        <p>Número de orden:{orderId}</p>
    </div>
  )
}

export default SendOrder