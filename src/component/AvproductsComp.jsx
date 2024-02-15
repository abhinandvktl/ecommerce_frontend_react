import React from 'react'
import { Table } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';


function AvproductsComp() {
  return (
    <div>

      <div>
        <p className='fs-1 ps-2'>PRODUCTS</p>
        {/* search */}
        <div className='d-flex justify-content-end mb-2 mt-2'>
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
          </Nav>

          {/* add product */}
          <button className='btn btn-info'>ADD</button>
        </div>


      </div>
      <div className='main'>
        {/* table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>PRODUCT NAME</th>
              <th>IMAGE</th>
              <th>PRICE</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>productname</td>
              <td><img src="" alt="noimage" /></td>
              <td>price</td>
              <td>description</td>
              <td>
                <button className='btn'><i class="fa-solid fa-eye text-info"></i></button>
                <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
                <button className='btn'><i class="fa-solid fa-trash text-info"></i></button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>productname</td>
              <td><img src="" alt="noimage" /></td>
              <td>price</td>
              <td>description</td>
              <td>
                <button className='btn' ><i class="fa-solid fa-eye text-info"></i></button>
                <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
                <button className='btn'><i class="fa-solid fa-trash text-info"></i></button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default AvproductsComp