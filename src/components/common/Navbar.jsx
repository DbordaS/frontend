import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default class Navbars extends Component { 

  botonredireccion=()=>{
    const usuario = localStorage.getItem("user")
    if(usuario === "admin"){
      window.location=('/paginaprincipal/admin/')
    }else if(usuario === "user"){
      window.location=('/paginaprincipal/user')
    }else {
      window.location=('/')
    }
  }

  render() {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Participacion Ciudadana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
          </Nav>
          <Nav>
            <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}



