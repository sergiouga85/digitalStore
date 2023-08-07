import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const Cart = () => {
  return (
    <div>
      <Link>
        <CartWidget></CartWidget>
      </Link>
    </div>
  )
}

export default Cart