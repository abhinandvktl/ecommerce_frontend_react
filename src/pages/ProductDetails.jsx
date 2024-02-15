import React from 'react'
import { Button, Card, CardBody, CardImg, Col, Container, Row } from 'react-bootstrap'
import Search from '../component/Search'
import Header from '../component/Header'
import Footer from '../component/Footer'


function ProductDetails() {
  return (
    <>
      <Header />



      <Search />


      <Container fluid>
        <Row className="justify-content-center mb-0">
          <Col md="12" xl="10">
            <Card className="shadow-0 border rounded-3 mt-5 mb-3">
              <CardBody>
                <Row>
                  <Col md="12" lg="3" className="mb-4 mb-lg-0">

                    <CardImg
                      src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>

                  </Col>
                  <Col md="6">
                    <h5>PRODUCT NAME</h5>

                    <ul>
                    <li>description</li>
                      <li>description</li>
                      <li>description</li>
                      <li>description</li>
                    </ul>

                  </Col>
                  <Col
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">$13.99</h4>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <Button color="primary" size="sm">
                        ADD TO CART
                      </Button>
                      <Button outline color="primary" size="sm" className="mt-2">
                        BUY
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>


      <Footer />
    </>
  )
}

export default ProductDetails