import React from 'react'
import { Link} from 'react-router-dom'
import{useContext} from 'react'
import {Flex} from "@chakra-ui/react";
import logo from '../assets/img/logo2.png'
import CartWidget from './CartWidget';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';



const NavBar = () => {

    return (
        <>
        <Flex className="logotipo">
            <Navbar.Brand as={Link} to={`/`} href="#"><img src={logo} alt="logo" /></Navbar.Brand>

            <Link to={`/Checkout`} className="cartwidget" >
                <CartWidget  background-color="white" />
            </Link>
        </Flex>
        <Flex className="header">
            <Navbar bg="dark-outline" data-bs-theme="dark">  
                    <Nav className="me-auto">
                        <Nav.Link  as={Link} to={`/`} className="link" href="#">INICIO</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={`/categoria/Placas de desarrollo`} href="#action/3.1">Placas de desarrollo</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/categoria/Herramientas e instrumental electrónico`} href="#action/3.2">Herramientas e instrumental electrónico</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/categoria/Modulos y componentes electrónicos`} href="#action/3.3">Modulos y componentes electrónicos</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link as={Link} to={`/contact`} className="link" href="#">CONTACTO</Nav.Link> 
                    </Nav>  
            </Navbar>

        </Flex>
        
        </>
    )
}

export default NavBar
