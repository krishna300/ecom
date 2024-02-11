import React from 'react'
import { 
    IoMdStar,
    IoMdStarHalf,
    IoMdStarOutline,
} from "react-icons/io";

const Rating = ({rating}) => {
  return (
    <>
        {rating ===0.5?<IoMdStarHalf size={29}/>:rating>=1?<IoMdStar size={29}/>:<IoMdStarOutline size={29}/>}
        {rating ===1.5?<IoMdStarHalf size={29}/>:rating>=2?<IoMdStar size={29}/>:<IoMdStarOutline size={29}/>}
        {rating ===2.5?<IoMdStarHalf size={29}/>:rating>=3?<IoMdStar size={29}/>:<IoMdStarOutline size={29}/>}
        {rating ===3.5?<IoMdStarHalf size={29}/>:rating>=4?<IoMdStar size={29}/>:<IoMdStarOutline size={29}/>}
        {rating ===4.5?<IoMdStarHalf size={29}/>:rating>=5?<IoMdStar size={29}/>:<IoMdStarOutline size={29}/>}

    </>
  )
}

export default Rating