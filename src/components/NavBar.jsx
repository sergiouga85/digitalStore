import React from 'react'
import { Flex, Box } from "@chakra-ui/react";
import logo from '../assets/img/logo1.png'
import CartWidget from './CartWidget';
import { Nav, Navbar, Container,NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Flex className="header">
            <Navbar bg="dark-outline" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link class="link" href="#">INICIO</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link class="link" href="#">CONTACTO</Nav.Link>   
                    </Nav>
                </Container>
            </Navbar>
            <Box>
                <CartWidget background-color="white" />
            </Box>
        </Flex>
    )
}

export default NavBar
