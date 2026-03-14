import React from 'react'
import { useNavigate } from 'react-router-dom'

const MiniBoxes = (props) => {

  let redirect = useNavigate()

  return (
    <div onClick={()=>{redirect("/categories")}} className='w-[8%] h-36 rounded-xl overflow-hidden hover:scale-110 transition-transform duration-300'>
        <img src={props.img} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default MiniBoxes