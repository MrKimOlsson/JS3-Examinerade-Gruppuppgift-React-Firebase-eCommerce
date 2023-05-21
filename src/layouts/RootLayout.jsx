import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/universal/navbar/Navbar'
import Footer from '../components/universal/footer/Footer'

const RootLayout = ({ products, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Navbar key={products._id} products={products} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
