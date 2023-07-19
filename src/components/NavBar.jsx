import React from 'react'
import { Flex, Box } from "@chakra-ui/react";
import logo from '../assets/img/logo1.png'
import CartWidget from './CartWidget';
import {Nav, Navbar,Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Flex className="header">
            <Navbar bg="dark-outline" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link class="link" href="#">INICIO</Nav.Link>
                        <Nav.Link class="link" href="#">PRODUCTOS</Nav.Link>
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
