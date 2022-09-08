import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavbarUser extends Component {

    cerrarSesion=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("username")
        window.location=("/")
    }

    render() {
    const userName = localStorage.getItem('username')
        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/paginaprincipal/user">Participacion Ciudadana</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-start">
            </Nav>
            <Nav>
            <Navbar.Text>
                Bienvend@: <a>{userName.charAt(0).toUpperCase() + userName.slice(1)}</a>
            </Navbar.Text>
            <Nav.Link onClick={this.cerrarSesion}>cerrar sesion</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
