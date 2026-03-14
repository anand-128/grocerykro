import React from 'react'

const Box = (props) => {
  return (
    <div className='w-[25%] h-full rounded-2xl overflow-hidden'>
        <img src={props.img} alt="" className='w-full h-full object-cover object-center'/>
    </div>
  )
}

export default Box