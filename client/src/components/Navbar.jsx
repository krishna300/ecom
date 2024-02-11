import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () =>{
  return (
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'auto',
        maxWidth:'1200px',
        padding:'0px 17px'
    }}>
        
        <h1>E-Shop</h1>
        <div style={{ display:'flex', gap:'17px'}}>
            <FaShoppingCart size={32}/>
            <BsFillPersonFill size={32} />
        </div>
    </div>
  )
}

export default Navbar