import React from 'react'
import Footer from './Footer'
import CarouselFadeExample from './CarouselFadeExample'

const Contact = () => {
  return (

    <div >
        <div className="mainCarousel">
            <CarouselFadeExample></CarouselFadeExample>
        </div>

        <div className="leyendaContainer">
            <p className="parrafo-item">En el momento que usted complete y nos envíe sus datos el personal de nuestra tienda tomará contacto con usted.
                  Para que podamos ayudarlo a resolver su consulta, o bien asesorarlo con información técnica por favor sea lo mas específico posible en el casillero “consulta”.
                  Muchas Gracias por su contacto. </p>
        </div>

        <div >
            <div className="container-formulario">
                <form className="formulario">
                    <h3>Contacto</h3>
                    <div>
                        <div className="campo"> 
                            <label form="Nombre">Nombre</label>
                            <input className="input" type='text' placeholder='Nombre'></input>
                        </div>
                        <div className="campo"> 
                            <label form="Apellido">Apellido</label>
                            <input className="input" type='text' placeholder='Apellido'></input>
                        </div>
                    
                        <div className="campo">
                            <label form="email">Email</label>
                            <input className="input" type='text' placeholder='Email'></input>
                        </div> 
                        <div className="campo">    
                            <label form="consulta">Consulta</label>
                            <textarea className="input" name="" id="consulta" cols="22" rows="10" placeholder=" ingrese su consulta"></textarea>
                        </div>  
                    </div>
                    <div>
                        <button className="botonEnviar" type="submit">Enviar</button>
                    </div>  
                </form>     
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
        
  )
}

export default Contact