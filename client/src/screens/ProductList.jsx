import React from 'react'
import { products } from '../products'
import Card from '../components/Card'

const ProductList = () => {
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)'
    }}>
        {products.map((product)=>(
            <>
                <Card product={product} />
            </>
        ))
        }
    </div>
  )
}

export default ProductList