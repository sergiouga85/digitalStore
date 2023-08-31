import React from 'react'
import{useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import {useState} from 'react'

const SendOrder = () => {

    const {cart, setCart} = useContext (CartContext);
    const [nombre, setNombre]=useState("")
    const [apellido, setApellido]=useState("")
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
        apellido,
        email,
        items,
        total
    }
    
   
    const orderCollection= collection(db,"orden")

    
  return (

    <div >

         <div className="leyendaContainer">
            <p className="parrafo-item">En el momento que usted complete y nos envíe sus datos se gestionara su pedido de compra. Nuevamente Gracias!</p>
        </div>

        <div >
            <div className="container-formulario">
                <form className="formulario" onSubmit={handleSubmit}>
                    <h3>ORDEN DE COMPRA</h3>
                    <div>
                        <div className="campo"> 
                            <label form="Nombre">Nombre</label>
                            <input className="input" type='text' placeholder='Nombre'onChange={(e)=> setNombre(e.target.value)}></input>
                        </div>
                        <div className="campo"> 
                            <label form="Apellido">Apellido</label>
                            <input className="input" type='text' placeholder='Apellido'onChange={(e)=> setApellido(e.target.value)}></input>
                        </div>
                    
                        <div className="campo">
                            <label form="email">Email</label>
                            <input className="input" type='text' placeholder='Email'onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>   
                    </div>
                    <div>
                        <button className="botonEnviar" type="submit">Enviar</button>
                    </div>  
                </form>     
            </div>
            
                <form className="formularioPie">
                    <div  className="campo">
                        <label form="numerOrden">Número de orden:</label>
                        <p className="inputp">{orderId}</p>
                    </div>
                </form>
            
        </div>
    </div>
  )
}

export default SendOrder