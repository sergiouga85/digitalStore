import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
    return (

        <>
            {
              productos.map((p) => (
                
                  <div key={p.nombre}>
                        <Item   id={p.id}
                            nombre={p.nombre}
                            descripcion={p.descripcion} 
                            imagen={p.imagen}  
                        />
                    </div>
                          
              ))
            }

        </>
    )
}

export default ItemList