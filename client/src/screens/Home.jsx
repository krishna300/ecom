import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from './ProductList'
const Home = () => {
  return (
    <>
    <div style={{
      backgroundColor:'rgba(237, 192, 94, 0.17)'
    }}>
      <Navbar/> 
    </div>
      <div style={{margin:'auto', maxWidth:'1200px', paddingTop:'12px'}}>
        <ProductList/>
      </div>

    </>
  )
}

export default Home