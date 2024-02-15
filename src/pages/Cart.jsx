import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, Col, Container, Row } from 'react-bootstrap'
import Header from '../component/Header'
import Footer from '../component/Footer'


function Cart() {
  return (
    <>
    <Header/>
    <div>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <Container className="py-5 h-100">
    <Row className="justify-content-center align-items-center h-100">
      <Col size="12">
        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <CardBody className="p-0">
            <Row className="g-0">
              <Col lg="8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <p tag="h1" className="fw-bold mb-0 text-black">
                      Shopping Cart
                    </p>
                  </div>

                  <hr className="my-4" />

                  <Row className="mb-4 d-flex justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                      <CardImg
                        src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </Col>
                    <Col md="3" lg="3" xl="3">
                      <p tag="h6" className="text-muted">
                        Shirt
                      </p>
                      <p tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </p>
                    </Col>
                    <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-minus"></i>
                      </Button>

                      <input type="number" min="0" defaultValue={1} style={{width:"4rem"}} />

                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-plus"></i>
                      </Button>
                    </Col>
                    <Col md="3" lg="2" xl="2" className="text-end">
                      <p tag="h6" className="mb-0">
                        € 44.00
                      </p>
                    </Col>
                    <Col md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                      <i class="fa-solid fa-x"></i>
                      </a>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <Row className="mb-4 d-flex justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                      <CardImg
                        src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </Col>
                    <Col md="3" lg="3" xl="3">
                      <p tag="h6" className="text-muted">
                        Shirt
                      </p>
                      <p tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </p>
                    </Col>
                    <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-minus"></i>
                      </Button>

                      <input type="number" min="0" defaultValue={1} style={{width:"4rem"}} />

                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-plus"></i>
                      </Button>
                    </Col>
                    <Col md="3" lg="2" xl="2" className="text-end">
                      <p tag="h6" className="mb-0">
                        € 44.00
                      </p>
                    </Col>
                    <Col md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                      <i class="fa-solid fa-x"></i>
                      </a>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <Row className="mb-4 d-flex justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                      <CardImg
                        src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </Col>
                    <Col md="3" lg="3" xl="3">
                      <p tag="h6" className="text-muted">
                        Shirt
                      </p>
                      <p tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </p>
                    </Col>
                    <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-minus"></i>
                      </Button>

                      <input type="number" min="0" defaultValue={1} style={{width:"4rem"}} />

                      <Button color="link" className="px-2">
                      <i class="fa-solid fa-plus"></i>
                      </Button>
                    </Col>
                    <Col md="3" lg="2" xl="2" className="text-end">
                      <p tag="h6" className="mb-0">
                        € 44.00
                      </p>
                    </Col>
                    <Col md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                      <i class="fa-solid fa-x"></i>
                      </a>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <div className="pt-5">
                    <p tag="h6" className="mb-0">
                      <CardText tag="a" href="#!" className="text-body">
                      <i class="fa-solid fa-arrow-left"> back</i>
                      </CardText>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="bg-grey">
                <div className="p-5">
                  <p tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                  </p>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <p tag="h5" className="text-uppercase">
                      items 3
                    </p>
                    <p tag="h5">€ 132.00</p>
                  </div>

                  <p tag="h5" className="text-uppercase mb-3">
                    Payment
                  </p>

                  <div className="mb-4 pb-2">
                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                      <option value="1">Cash On Delivery</option>
                      <option value="2">UPI</option>
                      <option value="3">Net Banking</option>
                    </select>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <p tag="h5" className="text-uppercase">
                      Total price
                    </p>
                    <p tag="h5">€ 132.00</p>
                  </div>

                  <Button color="dark" block size="lg">
                    Buy
                  </Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</section>
    </div>

    <Footer/>
    </>
  )
}

export default Cart