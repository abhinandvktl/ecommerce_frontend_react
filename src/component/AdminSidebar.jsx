import React, { useState } from 'react'


function AdminSidebar() {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div>
                <div className='bg-danger p-2' onClick={toggleCollapse}>
                    {isCollapsed ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-bars"></i>}
                </div>
                {!isCollapsed && (
                    <div>
                        {/* Content goes here */}
                        <div className='bg-info p-4'>
                            <h4>DASHBOARD</h4>
                            <div className='dashboard-list'>
                                <hr />
                                <a href="/viewusers" style={{textDecoration:"none"}}>USER</a>
                                <hr />
                                <a href="/viewproducts" style={{textDecoration:"none"}}>PRODUCTS</a>
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <a href="/viewproducts" style={{textDecoration:"none"}}>LOG OUT</a>
                                
                                
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default AdminSidebar