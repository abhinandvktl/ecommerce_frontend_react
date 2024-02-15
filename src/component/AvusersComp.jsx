import React from 'react'
import Table from 'react-bootstrap/Table';

function AvusersComp() {
  return (
    <>
      <div>

        <div>
          <p className='fs-1'>USERS</p>
        </div>
        <div className='main'>
          {/* table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email </th>
                <th>Mobile</th>
                {/* <th>Profile</th>
                <th>Status</th>
                <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                {/* <td>@mdo</td>
                <td>
                  <button className='btn btn-outline-danger'>blocked</button>
                </td>
                <td>
                  <button className='btn btn-outline-danger'><i class="fa-solid fa-lock"></i></button>
                  <button className='btn btn-outline-success'><i class="fa-solid fa-unlock"></i></button>
                </td> */}
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                {/* <td>@mdo</td>
                <td><button className='btn btn-outline-success'>Active</button></td>
                <td>
                  <button className='btn btn-outline-danger'><i class="fa-solid fa-lock"></i></button>
                  <button className='btn btn-outline-success'><i class="fa-solid fa-unlock"></i></button>
                </td> */}
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    </>
  )
}

export default AvusersComp