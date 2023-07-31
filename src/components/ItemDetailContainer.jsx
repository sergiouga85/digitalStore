import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({productos}) => {

  return (
    <>
            {productos.map((p) => {

                return (
                    <ItemDetail
                        key={p.id}
                        nombre={p.nombre}
                        descripcion={p.descripcion}
                        imagen={p.imagen}
                        precio={p.precio}
                        stock={p.stock}
                    />
                )
            })
            }
    </>
  )
}

export default ItemDetailContainer