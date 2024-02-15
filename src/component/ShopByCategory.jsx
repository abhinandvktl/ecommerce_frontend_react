import React from 'react'
import Button from 'react-bootstrap/Button';
import ShopbycategoryCards from './ShopbycategoryCards';


function ShopByCategory() {
  return (
    <>
    <p className='fs-2 text-center mt-5'>Shop By Category</p>

    <div className='d-flex justify-content-center gap-4 mb-5'>
    <Button variant="info">Featured Item</Button>{' '}
    <Button variant="info">Best Seller</Button>{' '}
    <Button variant="info">Top Rated</Button>{' '}
    </div>

    <ShopbycategoryCards/>

    </>
  )
}

export default ShopByCategory