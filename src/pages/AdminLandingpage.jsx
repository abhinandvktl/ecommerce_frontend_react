import React from 'react'
import Adminheader from '../component/Adminheader'
import AdminSidebar from '../component/AdminSidebar'
import AdminWorkui from '../component/AdminWorkui'



function AdminLandingpage() {
  return (
    <>
    <Adminheader/>
    <div className='d-flex'>

    <AdminSidebar/>
    <AdminWorkui/>
    </div>
    

      


      
    </>
  )
}

export default AdminLandingpage