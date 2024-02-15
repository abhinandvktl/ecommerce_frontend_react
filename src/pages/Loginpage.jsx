import React from 'react'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'


function Loginpage() {

    const navigate = useNavigate()
    const handleNavigate = () => {


        navigate('/')

    }

    return (
        <>
        <Header/>

            <Container fluid className='login-page-container'>

                <Row className='d-flex justify-content-center align-items-center h-100 pt-5 pb-5'>
                    <Col col='12'>

                        <Card className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <CardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-4 text-center">Please enter your email and password!</p>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>

                                <Button onClick={handleNavigate} size='sm'>
                                    Login
                                </Button>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="http://localhost:3000/signup" className="text-white-50 fw-bold">Sign Up</a></p>

                                    <div className='text-center mt-1'>
                                        <a href="http://localhost:3000/adminlogin" className='text-white-50'>Click Here For Admin Login</a>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>

            </Container>

            <Footer/>

        </>
    )
}

export default Loginpage