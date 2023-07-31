import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import arduinoUno from './assets/img/arduinoUno.jpg'
import arduinoNano from './assets/img/arduinoNano.jpg'
import kitArduino from './assets/img/kitArduino.jpg'
import Nodemcu from './assets/img/NodemcuEsp8266.jpg'
import Display7Seg from './assets/img/Display7Segmentos.jpg'
import AmplificadorTPA3116 from './assets/img/AmplificadorTpa3116da.jpg'
import EstacionGandic from './assets/img/EstaciondeSoldado.jpg'
import FuenteGandic from './assets/img/FuentedeLaboratorioGandic.jpg'
import MultimetroUniT from './assets/img/TesterUni-T.jpg'
import KitHerramientas from './assets/img/KitHerramientas.jpg'

const App = () => {

  const productos= [

    {id:1, nombre: "Arduino Uno", descripcion:"Placa Electronica de Desarrollo", imagen: arduinoUno,precio:5500, stock:10},
    {id:2, nombre: "Arduino Nano", descripcion: "Placa Electronica de Desarrollo", imagen:arduinoNano,precio:3900, stock:6},
    {id:3, nombre: "Kit Arduino Uno", descripcion:"kit para principiantes",imagen:kitArduino,precio:26000,  stock:5},
    {id:4, nombre: "Nodemcu ESP8266", descripcion:"Placa Electronica de Desarrollo", imagen: Nodemcu,precio:5500, stock:10},
    {id:5, nombre: "Display 7 Segmentos", descripcion: "Display 7 Segmentos Catodo común", imagen:Display7Seg,precio:3900, stock:6},
    {id:6, nombre: "Amplificador mono TPA 3116 150W", descripcion:"Amplificador De Audio Mono 150w Rms 24v Tpa3116da",imagen:AmplificadorTPA3116,precio:26000,  stock:10},
    {id:7, nombre: "Estacion de Soldado Gandic", descripcion:"Estacion de soldado Gandic 2 en uno con bomba de aire caliente ",imagen:EstacionGandic,precio:26000, stock:5},
    {id:8, nombre: "Fuente de Laboratorio Gandic", descripcion:"Fuente de Laboratorio Gandic regulable de 0-30V 5 Amper  ",imagen:FuenteGandic,precio:26000, stock:5},
    {id:9, nombre: "Multimetro Digital Uni-T", descripcion:"Multimetro Digital Uni-T UT33D",imagen:MultimetroUniT,precio:26000, stock:5},
    {id:10, nombre: "Kit Electrónico Herramientas", descripcion:"Kit Electrónico Soldador, desoldador, Tester, estaño, soporte",imagen:KitHerramientas,precio:26000, stock:5}
  ]

  return (
    <> 
      <NavBar></NavBar>
      <ItemListContainer productos={productos}/>  
      <ItemDetailContainer productos={productos}/>  
       
    </>
  )
}

export default App