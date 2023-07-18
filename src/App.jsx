import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

const App = () => {
  return (
    <>

      <NavBar></NavBar>
      <ItemListContainer
        greeting="Bienvenidoa a mi tienda"
      />

    </>
  )
}

export default App