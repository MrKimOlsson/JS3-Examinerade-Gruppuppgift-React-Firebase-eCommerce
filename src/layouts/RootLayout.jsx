import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/universal/navbar/Navbar'
import Footer from '../components/universal/footer/Footer'

const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
