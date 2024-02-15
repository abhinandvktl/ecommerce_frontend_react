import React from 'react'
import Adminheader from '../component/Adminheader'
import AdminSidebar from '../component/AdminSidebar'
import AvusersComp from '../component/AvusersComp'

function AdminViewusers() {
    return (
        <>
            <Adminheader />
            <div className='d-flex'>

                <AdminSidebar />
                <AvusersComp/>
            </div>

        </>

    )
}

export default AdminViewusers