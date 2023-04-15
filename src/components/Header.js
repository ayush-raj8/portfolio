import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'

function Header() {
  
  return (
    <Navbar variant='dark' bg="dark" expand="lg" collapseOnSelect >
      <Container fluid>
        <Navbar.Brand href="/">Ayush Raj </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://www.linkedin.com/in/ayush-raj-3427b71ab/" target="_blank" ><i className="fab fa-linkedin-in" ></i> </Nav.Link>
            <Nav.Link href="https://medium.com/@ayushraj763" target="_blank"><i className="fab fa-medium" ></i> </Nav.Link>
            <Nav.Link href="https://github.com/ayush-raj8" target="_blank"><i className="fab fa-github" ></i> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
