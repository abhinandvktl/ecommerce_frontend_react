import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';


function Search() {
  return (
    <>
    {/* search,cart,profile */}
    <div className='d-flex justify-content-center mb-2 mt-2'>
                <Nav>
                    <Form >
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="w-100"
                                />
                            </Col>
                        </Row>
                    </Form>

                    <Nav.Link href="#search"><i class="fa-solid fa-magnifying-glass" style={{ color: "#1f84a0" }}></i>
                    </Nav.Link>
                    <Nav.Link href="http://localhost:3000/cart">
                        <i class="fa-solid fa-cart-shopping" style={{ color: "#1f84a0" }}></i>
                    </Nav.Link>
                    <Nav.Link href="http://localhost:3000/loginpage">
                        <i class="fa-solid fa-user" style={{ color: "#1f84a0" }}></i>
                    </Nav.Link>
                </Nav>
            </div>
    </>
  )
}

export default Search