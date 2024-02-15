import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
    return (
        <>
            <div className='text-center text-lg-start text-white bg-dark'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i class="fa-brands fa-google"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </section>

                <section className=''>
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>
                            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <img src="LOGOerased.png" alt="logo here" style={{width:"120px"}}/>
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto facere quas beatae itaque vel incidunt tenetur praesentium repellat a odit illo ex reiciendis nulla excepturi, eligendi velit ipsam rem
                                </p>
                            </Col>

                            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h5 className='fw-bold text-white mb-4'>HELP</h5>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Search
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Help
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Information
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Privacy Policy
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Shipping Details
                                    </a>
                                </p>
                            </Col>

                            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h5 className='fw-bold text-white mb-4'>SUPPORT</h5>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Contact Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Refunds & Returns
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-decoration-none text-light'>
                                        Deliveries
                                    </a>
                                </p>
                            </Col>

                            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h5 className='text-uppercase fw-bold text-white mb-4'>Contact</h5>
                                <p>
                                <i class="fa-solid fa-location-dot" style={{color:"#1f84a0"}}></i> New York, NY 10012, US
                                </p>
                                <p>
                                <i class="fa-solid fa-envelope" style={{color:"#1f84a0"}}></i> info@example.com
                                </p>
                                <p>
                                <i class="fa-solid fa-phone" style={{color:"#1f84a0"}}></i> + 01 234 567 88
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='https://www.google.com/'>
                        www.medik.com
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer