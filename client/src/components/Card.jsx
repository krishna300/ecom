import React from 'react'
import Rating from './Rating'

const Card = ({product}) => {
  return (
    <div style={{
        width:'200px',
        height:'300px',
        padding:'7px',
        boxShadow:'2px 2px 5px 2px rgba(0, 0, 0, 0.3)'
    }}>
        <div style={{display:'flex', justifyContent:'center'}}>
            <img width="150px" height="150px" src={product.src} alt="Product"/>
        </div>
        <p style={{whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow: 'hidden'}}>{product.name}</p>
        <h2>₹{product.price}</h2>

        <Rating rating={product.rating}/>
    </div>
  )
}

export default Card