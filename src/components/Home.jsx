import React from 'react'
import ItemHome from './ItemHome'
import {Flex} from "@chakra-ui/react"
import arduinoUno from '../assets/img/arduinoUno.jpg'
import arduinoNano from '../assets/img/arduinoNano.jpg'
import kitArduino from '../assets/img/kitArduino.jpg'
import Nodemcu from '../assets/img/NodemcuEsp8266.jpg'
import Display7Seg from '../assets/img/Display7Segmentos.jpg'
import AmplificadorTPA3116 from '../assets/img/AmplificadorTpa3116da.jpg'
import EstacionGandic from '../assets/img/EstaciondeSoldado.jpg'
import FuenteGandic from '../assets/img/FuentedeLaboratorioGandic.jpg'
import MultimetroUniT from '../assets/img/TesterUni-T.jpg'
import KitHerramientas from '../assets/img/KitHerramientas.jpg'
import kitparaSoldar from '../assets/img/KitParaSoldar.jpg'
import KitDestornilladores from '../assets/img/KitDestornilladoresProskit.jpg'


const Home = () => {

  const productos= [

    {id:1, nombre: "Arduino Uno", categoria: "Placas de Desarrollo", descripcion:"Placa Electronica de Desarrollo", imagen: arduinoUno,precio:5500, stock:10},
    {id:2, nombre: "Arduino Nano",categoria: "Placas de Desarrollo", descripcion: "Placa Electronica de Desarrollo", imagen:arduinoNano,precio:3900, stock:6},
    {id:3, nombre: "Kit Arduino Uno", categoria: "Placas de Desarrollo",descripcion:"kit para principiantes",imagen:kitArduino,precio:26000,  stock:5},
    {id:4, nombre: "Nodemcu ESP8266", categoria: "Placas de Desarrollo",descripcion:"Placa Electronica de Desarrollo", imagen: Nodemcu,precio:5500, stock:10},
    {id:5, nombre: "Display 7 Segmentos",categoria: "Modulos y componentes", descripcion: "Display 7 Segmentos Catodo común", imagen:Display7Seg,precio:3900, stock:6},
    {id:6, nombre: "Amplificador mono TPA 3116 150W",categoria: "Modulos y componentes", descripcion:"Amplificador De Audio Mono 150w Rms 24v Tpa3116da",imagen:AmplificadorTPA3116,precio:26000,  stock:10},
    {id:7, nombre: "Estacion de Soldado Gandic",categoria: "Herramientas", descripcion:"Estacion de soldado Gandic 2 en uno con bomba de aire caliente ",imagen:EstacionGandic,precio:26000, stock:5},
    {id:8, nombre: "Fuente de Laboratorio Gandic", categoria: "Herramientas", descripcion:"Fuente de Laboratorio Gandic regulable de 0-30V 5 Amper  ",imagen:FuenteGandic,precio:26000, stock:5},
    {id:9, nombre: "Multimetro Digital Uni-T", categoria: "Herramientas", descripcion:"Multimetro Digital Uni-T UT33D",imagen:MultimetroUniT,precio:26000, stock:5},
    {id:10, nombre: "Kit Electrónico Herramientas", categoria: "Herramientas", descripcion:"Kit Electrónico Soldador, desoldador, Tester, estaño, soporte",imagen:KitHerramientas,precio:26000, stock:5},
    {id:11, nombre: "Kit para soldar",categoria: "Herramientas", descripcion:"Kit para soldar Malla antisoldante, flux, Resina limpiadora",imagen:kitparaSoldar,precio:26000, stock:5},
    {id:12, nombre: "Kit Destornilladores Proskit",categoria: "Herramientas", descripcion:"Kit de destornilladores perilleros Proskit",imagen:KitDestornilladores,precio:26000, stock:5}
  ]

  const getProductos= new Promise((resolve,reject)=>{
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      },2000)
    }else{
      reject(new Error("No Hay Productos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((Error)=>{
      console.log(Error)
    })



  return (
    <div>
        <Flex className="main">
          <ItemHome productos={productos}></ItemHome>
        </Flex>
        
      
    </div>
  )
}

export default Home