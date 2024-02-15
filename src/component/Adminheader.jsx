import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Adminheader() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="http://localhost:3000/"><img
            alt=""
            src="LOGOerased.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{' '}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#phone"><i class="fa-solid fa-phone" style={{ color: "#1f84a0" }}></i>(00) 000 123 456789</Nav.Link>
                            <Nav.Link href="#email"><i class="fa-solid fa-envelope" style={{ color: "#1f84a0" }}></i>
                                info@example.com
                            </Nav.Link>
                            <Nav.Link href="#location"><i class="fa-solid fa-location-dot" style={{ color: "#1f84a0" }}></i> Store Location</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Adminheader