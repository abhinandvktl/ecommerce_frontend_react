import React from 'react'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()
    const handleNavigate = () => {


        navigate('/loginpage')

    }

    return (
        <>
        
            <Container fluid className='login-page-container'>

                <Row className='d-flex justify-content-center align-items-center h-100 pt-5 pb-5'>
                    <Col col='12'>

                        <Card className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <CardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                <p className="text-white-50 mb-4 text-center">Please enter your details</p>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        Full Name
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        Mobile
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="9999 8888 77" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button onClick={handleNavigate} size='sm'>
                                    Sign Up
                                </Button>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default SignUp