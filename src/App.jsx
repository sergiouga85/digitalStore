import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

const App = () => {
  return (
    <>
      
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenidos a nuestra tienda digital"/>

    </>
  )
}

export default App