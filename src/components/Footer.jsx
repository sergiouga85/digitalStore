import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (

    <footer className="footerContainer">
      <div className="">
        <ul>
            <li>DigitalStore</li>
            <Link  as={Link} to={`/`} className="link">
                <li>Inicio</li>
            </Link>
        
            <li>Productos</li>
            <Link  as={Link} to={`/categoria/Placas de desarrollo`}>
                <li>Placas de desarrollo</li>
            </Link>
            <Link  as={Link} to={`/categoria/Herramientas e instrumental electrónico`}>
                <li>Herramientas e instrumental electrónico</li>
            </Link>
            <Link  as={Link} to={`/categoria/Modulos y componentes electrónicos`}>
                <li>Modulos y componentes electrónicos</li>
            </Link>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="parrofoPie">
        <p>© Digital Store, todos los derechos reservados. Sergio Ugarte Front end Developer</p>
      </div>
      <div>
        <ul>
          <li>info@digitalstore.com.ar</li>
          <li>Pieres 351, C1408HDE CABA, Capital Federal</li>
          <li>+5491168589850</li>
        </ul>
      </div>  
      </footer>    
  )
}

export default Footer