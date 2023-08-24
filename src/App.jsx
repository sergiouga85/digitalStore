import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartContext  from './context/ShoppingCartContext'


const App = () => {


  return (
    
    <BrowserRouter> 
      
      <ShoppingCartContext>
        <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>  
      </Routes>    
      
     </ShoppingCartContext>
      
    </BrowserRouter>

  )
}

export default App