import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainOutlet = () => {
  
  const [item, setItem]= useState(0)
  const [price, setPrice]= useState(0)

  return (
    <>
      <Navbar item={item} price={price}/>
      <Outlet context={{item, setItem ,price,setPrice}}/>
      <Footer />
    </>
  )
}

export default MainOutlet