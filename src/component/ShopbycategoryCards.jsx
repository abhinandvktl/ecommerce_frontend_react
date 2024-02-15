import React from 'react'
import {
  Container, Row,
  Col,
  Card,
  CardBody, CardImg, Button
} from 'react-bootstrap'
import Ripples from 'react-ripples'
import { useNavigate } from 'react-router-dom'


function ShopbycategoryCards() {

  const navigate = useNavigate()
  const handleNavigate = () => {


    navigate('/productdetails')

  }

  return (
    <>
      <Container fluid className="my-5 text-center d-flex justify-content-around">
        <Row className='w-75'>
          <Col md="6" lg="4" className="mb-4">
            <Card className='productcard'>
              <Ripples
              // rippleColor="light"
              // rippleTag="div"
              // className="bg-image rounded hover-zoom"
              >
                <CardImg
                  src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                  fluid
                  className="w-100"
                  onClick={handleNavigate} />
              </Ripples>
              <CardBody>

                <div className='producttitle'>
                  <h5 className="card-title mb-3">Product name</h5>
                </div>

                <h6 className="mb-3">$61.99</h6>
                <Button style={{ backgroundColor: "#1f84a0", color: "white" }}>QUICK BUY</Button>
                <Button variant="info">ADD TO CART</Button>
              </CardBody>
            </Card>
          </Col>
          
          <Col md="6" lg="4" className="mb-4">
            <Card className='productcard'>
              <Ripples
              // rippleColor="light"
              // rippleTag="div"
              // className="bg-image rounded hover-zoom"
              >
                <CardImg
                  src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                  fluid
                  className="w-100"
                  onClick={handleNavigate} />
              </Ripples>
              <CardBody>

                <div className='producttitle'>
                  <h5 className="card-title mb-3">Product name</h5>
                </div>

                <h6 className="mb-3">$61.99</h6>
                <Button style={{ backgroundColor: "#1f84a0", color: "white" }}>QUICK BUY</Button>
                <Button variant="info">ADD TO CART</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className='productcard'>
              <Ripples
              // rippleColor="light"
              // rippleTag="div"
              // className="bg-image rounded hover-zoom"
              >
                <CardImg
                  src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                  fluid
                  className="w-100"
                  onClick={handleNavigate} />
              </Ripples>
              <CardBody>

                <div className='producttitle'>
                  <h5 className="card-title mb-3">Product name</h5>
                </div>

                <h6 className="mb-3">$61.99</h6>
                <Button style={{ backgroundColor: "#1f84a0", color: "white" }}>QUICK BUY</Button>
                <Button variant="info">ADD TO CART</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className='productcard'>
              <Ripples
              // rippleColor="light"
              // rippleTag="div"
              // className="bg-image rounded hover-zoom"
              >
                <CardImg
                  src="https://medik-demo.myshopify.com/cdn/shop/products/pdt22.jpg?v=1612956279&width=360"
                  fluid
                  className="w-100"
                  onClick={handleNavigate} />
              </Ripples>
              <CardBody>

                <div className='producttitle'>
                  <h5 className="card-title mb-3">Product name</h5>
                </div>

                <h6 className="mb-3">$61.99</h6>
                <Button style={{ backgroundColor: "#1f84a0", color: "white" }}>QUICK BUY</Button>
                <Button variant="info">ADD TO CART</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ShopbycategoryCards