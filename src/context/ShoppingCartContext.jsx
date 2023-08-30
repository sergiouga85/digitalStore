import {createContext, useState} from 'react'

export const CartContext = createContext({cart: []})

export const ShoppingCartProvider= ({children}) => {

    const [cart,setCart]= useState([])

    const [count,setCount] = useState(0);

  return (

    <CartContext.Provider value={{cart, setCart, count,setCount}}>

        {children}

    </CartContext.Provider>
  )
}

export default ShoppingCartProvider