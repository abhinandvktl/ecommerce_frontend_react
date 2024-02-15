import React from 'react'
import ShopByCategory from '../component/ShopByCategory'
import Threeslides from '../component/Threeslides'
import Search from '../component/Search'
import Header from '../component/Header'
import Footer from '../component/Footer'




function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <Threeslides/>
    <ShopByCategory/>
    <Footer/>
    </>
  )
}

export default Home