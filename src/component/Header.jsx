import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Header() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/"><img
                        alt=""
                        src="LOGOerased.png"
                        width="100"
                        height="100"
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

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>

                            <Nav.Link href="http://localhost:3000/aboutus">About Us</Nav.Link>

                            <Nav.Link href="http://localhost:3000/contactus">Contact Us</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header