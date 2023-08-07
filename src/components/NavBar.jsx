import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box} from "@chakra-ui/react";
import logo from '../assets/img/logo1.png'
import CartWidget from './CartWidget';
import { Nav, Navbar, NavDropdown,NavLink} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Flex className="header">
            <Navbar.Brand as={Link} to={`/`} href="#"><img src={logo} alt="logo" /></Navbar.Brand>
            <Navbar bg="dark-outline" data-bs-theme="dark">  
                    <Nav className="me-auto">
                        <Nav.Link  as={Link} to={`/`} className="link" href="#">INICIO</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={`/categoria/Placas de Desarrollo`} href="#action/3.1">Placas de desarrollo</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/categoria/Herramientas`} href="#action/3.2">Herramientas</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={`/categoria/Modulos y componentes`} href="#action/3.3">Modulos y componentes</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link className="link" href="#">CONTACTO</Nav.Link> 
                    </Nav>  
            </Navbar>
            <Box>
                <Link to={`/Cart`}>
                    <CartWidget background-color="white" />
                </Link>
            </Box>

        </Flex>
    )
}

export default NavBar
