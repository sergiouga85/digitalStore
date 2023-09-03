import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (

    <footer className="gridFooterContainer">
      <div className="itemFooter">  
        <h6>DigitalStore</h6>
      </div>
      <div className="itemFooter">
        <Link  as={Link} to={`/`}>
          <h6>Inicio</h6>
        </Link>
      </div>
      <div className="itemFooter">
        <h6>Productos</h6>
      </div>
      <div className="itemFooter">
        <Link  as={Link} to={`/categoria/Placas de desarrollo`}>
          <h6>Placas de desarrollo</h6>
        </Link>
      </div>
      <div className="itemFooter">
        <Link  as={Link} to={`/categoria/Herramientas e instrumental electrónico`}>
          <h6>Herramientas e instrumental </h6>
        </Link>    
      </div>       
      <div className="itemFooter">
        <Link  as={Link} to={`/categoria/Modulos y componentes electrónicos`}>
          <h6>Modulos y componentes </h6>
        </Link>
      </div>      
      <div className="itemFooter"> 
        <Link  as={Link} to={`/contact`}>
          <h6>Contacto</h6>
        </Link>
      </div>
      <div className="itemFooter">
        <h6>© Digital Store, todos los derechos reservados. Sergio Ugarte Front end Developer</h6>
      </div>
      <div className="itemFooter">
        <h6>info@digitalstore.com.ar</h6>
      </div> 
      <div className="itemFooter">
        <h6>Pieres 351</h6>
      </div>
      <div className="itemFooter">
        <h6>C1408HDE CABA, Capital Federal</h6>
      </div>
      <div className="itemFooter">
        <h6>+5491168589850</h6>
      </div>   
      
    </footer>    
  )
}

export default Footer