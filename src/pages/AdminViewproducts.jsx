import React from 'react'
import Adminheader from '../component/Adminheader'
import AdminSidebar from '../component/AdminSidebar'
import AdminWorkui from '../component/AdminWorkui'
import AvproductsComp from '../component/AvproductsComp'

function AdminViewproducts() {
  return (
    <>
      <Adminheader />
      <div className='d-flex'>

        <AdminSidebar />
        <AvproductsComp/>
      </div>
    </>
  )
}

export default AdminViewproducts